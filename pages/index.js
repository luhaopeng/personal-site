import { Layout, BackTop } from 'antd'
import Head from 'next/head'
import SiteHeader from '../components/site-header'
import BlogContent from '../components/blog/content'
import '../static/style/index.less'

const { Header, Content, Footer } = Layout

export default () => (
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
        <Header className='site-header'>
            <SiteHeader />
        </Header>
        <Content style={{ background: '#fff' }}>
            <BlogContent id='5c50094ab45fe9411c3aae89' />
        </Content>
        <BackTop />
        <Footer className='site-footer'>
            &copy; 2019 卢浩鹏
            <div className='beian-link'>
                <a
                    href='http://www.miitbeian.gov.cn/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    浙ICP备19001505号-1
                </a>
                <a
                    href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002013747'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img src='/static/img/beian.png' />
                    浙公网安备 33011002013747号
                </a>
            </div>
        </Footer>
    </Layout>
)
