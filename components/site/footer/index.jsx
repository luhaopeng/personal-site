import React from 'react'
import { Layout } from 'antd'
import './index.less'

const { Footer } = Layout

class SiteFooter extends React.Component {
    render() {
        return (
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
        )
    }
}

export default SiteFooter
