import React from 'react'
import { Timeline, Icon } from 'antd'
import styled from 'styled-components'

const green = '#3eaf7c'

const MyTimeline = styled(Timeline)`
    & li {
        font-size: 1rem;
    }
`
const TodaySpan = styled.span`
    color: ${green};
`
const TodayIcon = styled(Icon)`
    color: ${green};
    font-size: 1rem;
`

class BlogTimeline extends React.Component {
    render() {
        return (
            <MyTimeline
                pendingDot={<TodayIcon type='clock-circle' />}
                pending={<TodaySpan>今天</TodaySpan>}
                reverse
            >
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>
                    Solve initial network problems 2015-09-01
                </Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            </MyTimeline>
        )
    }
}

export default BlogTimeline
