import React from 'react'
import { Layout, BackTop } from 'antd'
import Head from 'next/head'
import SiteHeader from '../components/site/header'
import SiteFooter from '../components/site/footer'
import ArchiveContent from '../components/archive/content'
import '../static/style/index.less'

class Archive extends React.Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title key='page-title'>文章 - 卢浩鹏的技术日志</title>
                </Head>
                <SiteHeader current='archive' />
                <ArchiveContent />
                <BackTop />
                <SiteFooter />
            </Layout>
        )
    }
}

export default Archive
