import React from 'react'
import { Layout, Row, Col, Menu, Icon } from 'antd'
import Link from 'next/link'
import Head from 'next/head'
import ReactSVG from 'react-svg'
import './index.less'

const { Header } = Layout
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class SiteHeader extends React.Component {
    state = {
        current: 'home'
    }
    handleClick = e => {
        this.setState({
            current: e.key
        })
    }
    render() {
        const logoStyle = {
            fill: '#2c3e50',
            height: '2.5rem',
            verticalAlign: 'middle'
        }
        return (
            <Header className='site-header'>
                <Head>
                    <link
                        key='favicon'
                        rel='shortcut icon'
                        href='/static/img/favicon.ico'
                        type='image/x-icon'
                    />
                </Head>
                <Row
                    type='flex'
                    justify='space-between'
                    align='middle'
                    style={{
                        width: this.props.width || '90%',
                        margin: '0 auto',
                        padding: '0 45px'
                    }}
                >
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
                        <Menu
                            id='nav'
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode='horizontal'
                            style={{ marginLeft: 'auto', borderBottom: 'none' }}
                        >
                            <Menu.Item key='home'>首页</Menu.Item>
                            <Menu.Item key='article'>文章</Menu.Item>
                            <SubMenu title='工具'>
                                <MenuItemGroup title='DNF'>
                                    <Menu.Item key='tool:luke'>
                                        <a
                                            href='https://www.lhp.one/luke/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <Icon type='link' />
                                            卢克排表工具
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item key='tool:hyper'>
                                        <a
                                            href='https://www.lhp.one/hyper/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <Icon type='link' />
                                            超时空排表工具
                                        </a>
                                    </Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title='工具说明'>
                                    <Menu.Item key='tutorial:luke'>
                                        <a
                                            href='https://www.lhp.one/essay/tutorial/luke/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <Icon type='link' />
                                            卢克排表工具说明
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item key='tutorial:hyper'>
                                        <a
                                            href='https://www.lhp.one/essay/tutorial/hyper/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <Icon type='link' />
                                            超时空排表工具说明
                                        </a>
                                    </Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <Menu.Item key='about'>关于</Menu.Item>
                            <Menu.Item key='github'>
                                <a
                                    href='https://github.com/luhaopeng'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Icon type='link' />
                                    GitHub
                                </a>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Header>
        )
    }
}

export default SiteHeader