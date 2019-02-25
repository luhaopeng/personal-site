import React from 'react'
import { List,Tag } from 'antd'
import dayjs from 'dayjs'
import './index.less'

const dateFormat = 'YYYY-MM-DD HH:mm:ss'

class ListItem extends React.Component {
    render() {
        let blog = this.props.item
        return (
            <List.Item onClick={this.props.onClick} className='blog-list'>
                <div>
                    <b>{blog.title} </b>
                    {blog.draft ? <Tag>草稿</Tag> : null}
                    <div className='time'>
                        {dayjs(blog.time).format(dateFormat)}
                    </div>
                </div>
            </List.Item>
        )
    }
}

export default ListItem
