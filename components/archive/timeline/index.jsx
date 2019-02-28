import React from 'react'
import { Timeline } from 'antd'

class BlogTimeline extends React.Component {
    render() {
        return (
            <Timeline pending='Recording...' reverse>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>
                    Solve initial network problems 2015-09-01
                </Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            </Timeline>
        )
    }
}

export default BlogTimeline
