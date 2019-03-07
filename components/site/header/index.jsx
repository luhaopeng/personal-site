import React from 'react'
import { Layout, Row, Col, Menu, Icon } from 'antd'
import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'
import ReactSVG from 'react-svg'
import { Link as MyLink } from '../../common'
import './index.less'

const Item = Menu.Item
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const MyHeader = styled(Layout.Header)`
    background: #fff;
    padding: 0;
    box-shadow: 0 2px 8px #f0f1f2;
    z-index: 1;
`
const HRow = styled(Row).attrs({
    type: 'flex',
    justify: 'space-between',
    align: 'middle'
})`
    width: ${props => props.width || '90%'};
    margin: 0 auto;
    padding: 0 45px;
`
const NavMenu = styled(Menu).attrs({
    id: 'nav',
    mode: 'horizontal'
})`
    margin-left: auto;
    border-bottom: none;
`
const OutLink = ({ children }) => (
    <MyLink>
        <Icon type='link' />
        {children}
    </MyLink>
)

class SiteHeader extends React.Component {
    render() {
        const logoStyle = {
            fill: '#2c3e50',
            height: '2.5rem',
            verticalAlign: 'middle'
        }
        return (
            <MyHeader>
                <Head>
                    <link
                        key='favicon'
                        rel='shortcut icon'
                        href='/static/img/favicon.ico'
                        type='image/x-icon'
                    />
                </Head>
                <HRow width={this.props.width}>
                    <Col>
                        <Link href='/'>
                            <a>
                                <ReactSVG
                                    src='/static/img/lhp.svg'
                                    svgStyle={logoStyle}
                                />
                            </a>
                        </Link>
                    </Col>
                    <Col>
                        <NavMenu selectedKeys={[this.props.current]}>
                            <Item key='home'>
                                <Link href='/'>
                                    <a>首页</a>
                                </Link>
                            </Item>
                            <Item key='archive'>
                                <Link href='/archive'>
                                    <a>文章</a>
                                </Link>
                            </Item>
                            <SubMenu title='工具'>
                                <MenuItemGroup title='DNF'>
                                    <Item key='tool:luke'>
                                        <OutLink href='https://www.lhp.one/luke/'>
                                            卢克排表工具
                                        </OutLink>
                                    </Item>
                                    <Item key='tool:hyper'>
                                        <OutLink href='https://www.lhp.one/hyper/'>
                                            超时空排表工具
                                        </OutLink>
                                    </Item>
                                </MenuItemGroup>
                                <MenuItemGroup title='工具说明'>
                                    <Item key='tutorial:luke'>
                                        <OutLink href='https://www.lhp.one/essay/tutorial/luke/'>
                                            卢克排表工具说明
                                        </OutLink>
                                    </Item>
                                    <Item key='tutorial:hyper'>
                                        <OutLink href='https://www.lhp.one/essay/tutorial/hyper/'>
                                            超时空排表工具说明
                                        </OutLink>
                                    </Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <Item key='about'>关于</Item>
                            <Item key='github'>
                                <OutLink href='https://github.com/luhaopeng'>
                                    GitHub
                                </OutLink>
                            </Item>
                        </NavMenu>
                    </Col>
                </HRow>
            </MyHeader>
        )
    }
}

export default SiteHeader
