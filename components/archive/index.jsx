import React from 'react'
import { Affix, Layout, Row, Col } from 'antd'
import Timeline from './timeline'
import YearList from './nav'
import './index.less'

const { Content } = Layout

class ArchiveContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            yearList: ['2019', '2018', '2017', '2016']
        }
    }
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
                                <YearList list={this.state.yearList}/>
                            </Affix>
                        </Col>
                    </Row>
                </div>
            </Content>
        )
    }
}

export default ArchiveContent
