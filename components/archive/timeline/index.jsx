import React from 'react'
import { Timeline, Icon } from 'antd'
import dayjs from 'dayjs'
import './index.less'

const green = '#3eaf7c'

class BlogTimeline extends React.Component {
    render() {
        let timeline = []
        let { list } = this.props
        list.map(doc => {
            timeline.push(
                <Timeline.Item key={doc._id}>
                    {doc.title}&nbsp;&nbsp;
                    <small>{dayjs(doc.time).format('YYYY-MM-DD HH:mm:ss')}</small>
                </Timeline.Item>
            )
        })
        return (
            <Timeline
                className='timeline'
                pendingDot={
                    <Icon
                        type='clock-circle'
                        style={{ color: green, fontSize: '16px' }}
                    />
                }
                pending={
                    this.props.current && (
                        <span style={{ color: green }}>今天</span>
                    )
                }
                reverse
            >
                {timeline}
            </Timeline>
        )
    }
}

export default BlogTimeline
