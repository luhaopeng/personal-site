import React from 'react'
import { Layout } from 'antd'
import Timeline from '../timeline'

const { Content } = Layout

class ArchiveContent extends React.Component {
    render() {
        return (
            <Content style={{ background: '#fff' }}>
                <Timeline />
            </Content>
        )
    }
}
export default ArchiveContent
