import { Layout, BackTop } from 'antd'
import Head from 'next/head'
import '../static/style/index.less'
import SiteHeader from '../components/site/header'
import BlogContent from '../components/blog/content'
import SiteFooter from '../components/site/footer'

export default () => (
    <Layout>
        <Head>
            <title key='page-title'>卢浩鹏的技术日志</title>
        </Head>
        <SiteHeader current='home' />
        <BlogContent id='5c6d177f689a59c044490a9e' />
        <BackTop />
        <SiteFooter />
    </Layout>
)
