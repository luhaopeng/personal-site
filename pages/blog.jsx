import React from 'react'
import { Layout, BackTop } from 'antd'
import Head from 'next/head'
import { withRouter } from 'next/router'
import '../static/style/index.less'
import SiteHeader from '../components/site/header'
import BlogContent from '../components/blog/content'
import SiteFooter from '../components/site/footer'

class Blog extends React.Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title key='page-title'>卢浩鹏的技术日志</title>
                </Head>
                <SiteHeader current='archive' />
                <BlogContent id={this.props.router.query.id} />
                <BackTop />
                <SiteFooter />
            </Layout>
        )
    }
}

export default withRouter(Blog)
