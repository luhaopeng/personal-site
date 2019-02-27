import React from 'react'
import { Layout, message } from 'antd'
import Head from 'next/head'
import '../static/style/index.less'
import SiteHeader from '../components/site/header'
import AuthModal from '../components/manage/auth-modal'
import ManageContent from '../components/manage/content'
import BlogList from '../components/manage/blog-list'
import SiteFooter from '../components/site/footer'
import { getBlogList } from '../api/blog'
import { verify } from '../api/auth'
import { errorMsg } from '../utils/common'

const { Sider } = Layout
let page = 0 // blog list 分页
const per_page = 5 // blog list 每页数量

class Manage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blogList: [],
            current: '',
            auth: '',
            verifyError: false,
            showModal: true
        }
    }

    refreshList = async (title = undefined) => {
        try {
            let res = await getBlogList({
                page,
                per_page,
                title,
                auth: this.state.auth
            })
            let blogList = res.data.doc
            this.setState({ blogList })
        } catch (error) {
            message.error(errorMsg(error))
        }
    }

    handleListClick = item => {
        this.setState({ current: item._id })
    }

    handleAuth = async value => {
        try {
            let res = await verify({ token: value })
            this.setState({
                showModal: false,
                auth: res.data.auth
            })
            message.success('登录成功')
            this.refreshList()
        } catch (error) {
            if (error.response.status === 401) {
                this.setState({
                    verifyError: true
                })
            }
        }
    }

    handleContentChange = (value = undefined) => {
        page = 0
        this.refreshList()
        this.setState({ current: value })
    }

    render() {
        return (
            <Layout>
                <Head>
                    <title key='page-title'>后台管理 - 卢浩鹏的技术日志</title>
                </Head>
                <SiteHeader width='100%' />
                <AuthModal
                    visible={this.state.showModal}
                    onComplete={this.handleAuth}
                    error={this.state.verifyError}
                />
                <Layout>
                    <Sider width={240} theme='light'>
                        <BlogList
                            list={this.state.blogList}
                            onClick={this.handleListClick}
                            onSearch={this.refreshList}
                            onAdd={() => {
                                this.setState({ current: null })
                            }}
                        />
                    </Sider>
                    <Layout>
                        <div className='full-height'>
                            <ManageContent
                                id={this.state.current}
                                auth={this.state.auth}
                                onChange={this.handleContentChange}
                            />
                            <SiteFooter />
                        </div>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Manage
