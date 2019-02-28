import React from 'react'
import { Layout } from 'antd'
import Timeline from '../timeline'
import './index.less'

const { Content } = Layout

class ArchiveContent extends React.Component {
    render() {
        return (
            <Content className='full-content-height'>
                <div className='archive-content'>
                    <Timeline />
                </div>
            </Content>
        )
    }
}

export default ArchiveContent
