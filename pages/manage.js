import React from 'react'
import { Layout } from 'antd'
import Head from 'next/head'
import '../static/style/index.less'
import SiteHeader from '../components/site/header'
import ManageContent from '../components/manage/content'
import BlogList from '../components/manage/blog-list'
import SiteFooter from '../components/site/footer'
import { getBlogList } from '../api/blog'

const { Sider } = Layout
let page = 0

class Manage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blogList: [],
            current: ''
        }
    }

    componentDidMount() {
        this.refreshList()
    }

    refreshList = async (title = undefined) => {
        let { data } = await getBlogList({ page, title })
        let blogList = data.doc
        this.setState({ blogList })
    }

    handleListClick = item => {
        this.setState({ current: item._id })
    }

    render() {
        return (
            <Layout>
                <Head>
                    <title key='page-title'>后台管理 - 卢浩鹏的技术日志</title>
                </Head>
                <SiteHeader width='100%' />
                <Layout>
                    <Sider width={240} theme='light'>
                        <BlogList
                            list={this.state.blogList}
                            onClick={this.handleListClick}
                            onSearch={this.refreshList}
                            onAdd={() => {
                                this.setState({ current: null })
                            }}
                            onRefresh={this.refreshList}
                        />
                    </Sider>
                    <Layout>
                        <div className='full-height'>
                            <ManageContent id={this.state.current} />
                            <SiteFooter />
                        </div>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Manage
