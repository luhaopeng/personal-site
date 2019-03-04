import React from 'react'
import { Affix, Layout, Row, Col } from 'antd'
import Timeline from './timeline'
import YearList from './nav'
import './index.less'

const { Content } = Layout

class ArchiveContent extends React.Component {
    render() {
        return (
            <Content className='full-content-height'>
                <div className='archive-content'>
                    <Row>
                        <Col span={20}>
                            <Timeline />
                        </Col>
                        <Col span={4}>
                            <Affix offsetTop={40}>
                                <YearList />
                            </Affix>
                        </Col>
                    </Row>
                </div>
            </Content>
        )
    }
}

export default ArchiveContent
