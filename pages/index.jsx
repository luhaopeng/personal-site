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
        <BlogContent id='5c822c1413e498547c5f10bc' />
        <BackTop />
        <SiteFooter />
    </Layout>
)
