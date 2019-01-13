import '../static/style/default.css'
import '../static/style/index.css'
import { Layout, BackTop } from 'antd'
import MyHeader from '../components/Header'
import BlogContent from '../components/blog/Content'

const { Header, Content, Footer } = Layout

export default () => (
    <Layout>
        <Header className='site-header'>
            <MyHeader />
        </Header>
        <Content style={{ background: '#fff' }}>
            <BlogContent />
        </Content>
        <BackTop />
        <Footer className='site-footer'>
            &copy; 2019 卢浩鹏
            <div className='beian-link'>
                <a
                    href='http://www.miitbeian.gov.cn/'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ marginRight: '1rem' }}
                >
                    浙ICP备19001505号-1
                </a>
                <a
                    target='_blank'
                    href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002013747'
                >
                    <img
                        src='/static/img/beian.png'
                        style={{ verticalAlign: 'bottom', marginRight: '2px' }}
                    />
                    浙公网安备 33011002013747号
                </a>
            </div>
        </Footer>
    </Layout>
)
