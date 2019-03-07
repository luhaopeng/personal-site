import React from 'react'
import styled from 'styled-components'
import { Affix, Layout, Row, Col } from 'antd'
import Timeline from './timeline'
import YearList from './nav'
import {
    site_header_height as header,
    site_footer_height as footer
} from '../../utils/theme'
import { Container } from '../common'

const Content = styled(Layout.Content)`
    min-height: calc(100vh - ${header} - ${footer});
`
const ArchiveContainer = styled(Container)`
    margin: 2rem auto 1rem;
    padding: 4rem 4rem 1rem;
    min-height: 18rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
`

class ArchiveContent extends React.Component {
    render() {
        return (
            <Content>
                <ArchiveContainer>
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
                </ArchiveContainer>
            </Content>
        )
    }
}

export default ArchiveContent
