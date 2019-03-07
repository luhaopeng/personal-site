import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'
import {Link} from '../common'

const { Footer } = Layout
const MyFooter = styled(Footer)`
    color: #939393;
    text-align: center;
`
const BeianSec = styled.section`
    padding-top: 10px;
`
const BeianLink = styled(Link)`
    &:not(:first-child) {
        margin-left: 1rem;
    }
`
const BeianImg = styled.img`
    vertical-align: bottom;
    margin-right: 2px;
`

class SiteFooter extends React.Component {
    render() {
        return (
            <MyFooter>
                &copy; 2019 卢浩鹏
                <BeianSec>
                    <BeianLink href='http://www.miitbeian.gov.cn/'>
                        浙ICP备19001505号-1
                    </BeianLink>
                    <BeianLink href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002013747'>
                        <BeianImg src='/static/img/beian.png' />
                        浙公网安备 33011002013747号
                    </BeianLink>
                </BeianSec>
            </MyFooter>
        )
    }
}

export default SiteFooter
