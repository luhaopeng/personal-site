import React from 'react'
import { Layout, List } from 'antd'
import Head from 'next/head'
import '../static/style/index.less'
import SiteHeader from '../components/site-header'
import ManageContent from '../components/manage-content'
import SiteFooter from '../components/site-footer'
import { getBlogList } from '../api/blog'

const { Sider } = Layout
let page = 0

class Manage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blogList: []
        }
    }
    async componentDidMount() {
        let { data } = await getBlogList({ page })
        let blogList = data.doc
        this.setState({ blogList })
    }
    handleListClick = e => {
        console.log(e.target) //eslint-disable-line
    }
    render() {
        return (
            <Layout>
                <Head>
                    <title key='page-title'>卢浩鹏的技术日志</title>
                    <link
                        key='favicon'
                        rel='shortcut icon'
                        href='/static/img/favicon.ico'
                        type='image/x-icon'
                    />
                </Head>
                <SiteHeader width='100%' />
                <Layout>
                    <Sider width={240} style={{ background: '#fff' }}>
                        <List
                            header={<div>Header</div>}
                            bordered
                            className='manage-blog-list'
                            dataSource={this.state.blogList}
                            renderItem={blog => (
                                <List.Item
                                    key={blog._id}
                                    onClick={this.handleListClick}
                                >
                                    <List.Item.Meta
                                        title={blog.title}
                                        description={blog.time}
                                    />
                                </List.Item>
                            )}
                        />
                    </Sider>
                    <Layout>
                        <div className='full-height'>
                            <ManageContent />
                            <SiteFooter />
                        </div>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Manage
