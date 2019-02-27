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
            hasMore: false,
            listLoading: false,
            current: '',
            auth: '',
            verifyError: false,
            showModal: true
        }
    }

    loadList = async (reset = true, title = undefined) => {
        this.setState({ listLoading: true })
        try {
            let blogList = this.state.blogList
            if (reset) {
                page = 0
                blogList = []
            }
            let res = await getBlogList({
                page,
                per_page,
                title,
                auth: this.state.auth
            })
            blogList = blogList.concat(res.data.doc)
            this.setState({
                blogList,
                hasMore: res.data.doc.length === per_page
            })
        } catch (error) {
            message.error(errorMsg(error))
        } finally {
            this.setState({ listLoading: false })
        }
    }

    handleLoadMore = () => {
        page++
        this.loadList(false)
    }

    handleListClick = item => {
        this.setState({ current: item._id })
    }

    handleAdd = () => {
        this.setState({ current: null })
    }

    handleSearch = value => {
        this.loadList(true, value)
    }

    handleAuth = async value => {
        try {
            let res = await verify({ token: value })
            this.setState({
                showModal: false,
                auth: res.data.auth
            })
            message.success('登录成功')
            this.loadList()
        } catch (error) {
            if (error.response.status === 401) {
                this.setState({
                    verifyError: true
                })
            }
        }
    }

    handleContentChange = (value = undefined) => {
        this.loadList()
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
                            initLoading={!this.state.auth}
                            loading={this.state.listLoading}
                            hasMore={this.state.hasMore}
                            onLoadMore={this.handleLoadMore}
                            list={this.state.blogList}
                            onClick={this.handleListClick}
                            onSearch={this.handleSearch}
                            onAdd={this.handleAdd}
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
