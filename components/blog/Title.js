import React from 'react'
import { Tag } from 'antd'
import dayjs from 'dayjs'
import './Title.less'

const dateFormat = 'YYYY-MM-DD HH:mm:ss'
class Title extends React.Component {
    render() {
        const { attr } = this.props
        return (
            <div className='article-title'>
                <h1>{attr.title}</h1>
                <Tag color='purple'>{attr.category}</Tag>
                {attr.tags.map(tag => (
                    <Tag key={tag} color='blue'>
                        {tag}
                    </Tag>
                ))}
                <span style={{ color: '#999' }}>
                    发表于 {dayjs(attr.time).format(dateFormat)}&nbsp;
                    阅读 {attr.read} 评论 {attr.comment}
                </span>
            </div>
        )
    }
}

export default Title
