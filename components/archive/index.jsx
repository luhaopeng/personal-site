import React from 'react'
import { Affix, Layout, Row, Col, Empty, Spin, message } from 'antd'
import Timeline from './timeline'
import YearList from './nav'
import { getArchive, getBlogListYear } from '../../api/blog'
import { errorMsg } from '../../utils/common'
import './index.less'

const { Content } = Layout

class ArchiveContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            yearList: [],
            currentYear: '',
            archive: [],
            pending: false
        }
    }

    handleYearSelect = async year => {
        this.setState({ pending: true, currentYear: year })
        try {
            let res = await getBlogListYear({ year })
            this.setState({ archive: res.data.data.docs })
        } catch (error) {
            message.error(errorMsg(error))
        } finally {
            this.setState({ pending: false })
        }
    }

    async componentDidMount() {
        let res = await getArchive()
        let { years, docs } = res.data.data
        if (!years || years.length === 0) {
            years = [new Date().getFullYear()]
        }
        years = years.map(val => val.toString())
        this.setState({ yearList: years, currentYear: years[0], archive: docs })
    }

    render() {
        const this_year = new Date().getFullYear().toString()
        let current = this_year === this.state.currentYear
        return (
            <Content className='full-content-height'>
                <div className='archive-content'>
                    <Row>
                        <Col span={20}>
                            {this.state.archive.length === 0 ? (
                                <Empty />
                            ) : (
                                <Spin spinning={this.state.pending}>
                                    <Timeline
                                        current={current}
                                        list={this.state.archive}
                                    />
                                </Spin>
                            )}
                        </Col>
                        <Col span={4}>
                            <Affix offsetTop={40}>
                                {this.state.yearList.length === 0 ? null : (
                                    <YearList
                                        list={this.state.yearList}
                                        onSelect={this.handleYearSelect}
                                    />
                                )}
                            </Affix>
                        </Col>
                    </Row>
                </div>
            </Content>
        )
    }
}

export default ArchiveContent
