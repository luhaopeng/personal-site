import { Layout, BackTop } from 'antd'
import Head from 'next/head'
import '../static/style/index.less'
import SiteHeader from '../components/site/header'
import BlogContent from '../components/blog/content'
import SiteFooter from '../components/site/footer'

const { Content } = Layout

export default () => (
    <Layout>
        <Head>
            <title key='page-title'>卢浩鹏的技术日志</title>
        </Head>
        <SiteHeader />
        <Content style={{ background: '#fff' }}>
            <BlogContent id='5c50094ab45fe9411c3aae89' />
        </Content>
        <BackTop />
        <SiteFooter />
    </Layout>
)
