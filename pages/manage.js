import React from 'react'
import { Layout, List } from 'antd'
import Head from 'next/head'
import '../static/style/index.less'
import SiteHeader from '../components/site-header'
import ManageContent from '../components/manage-content'

const { Header, Sider, Footer } = Layout
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
]

class Manage extends React.Component {
    render() {
        return (
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
                    <SiteHeader width='100%' />
                </Header>
                <Layout>
                    <Sider width={240} style={{ background: '#fff' }}>
                        <List
                            header={<div>Header</div>}
                            footer={<div>Footer</div>}
                            bordered
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <a href='javascript:void 0;'>{item}</a>
                                </List.Item>
                            )}
                        />
                    </Sider>
                    <Layout>
                        <div className='full-height'>
                            <ManageContent />
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
                        </div>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Manage
