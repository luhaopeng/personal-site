import React from 'react'
import { List } from 'antd'
import dayjs from 'dayjs'
import './index.less'

const dateFormat = 'YYYY-MM-DD HH:mm:ss'

class ListItem extends React.Component {
    handleClick = () => {
        let { onClick } = this.props
        !!onClick && typeof onClick === 'function' && onClick(this.props.item)
    }
    render() {
        let blog = this.props.item
        return (
            <List.Item onClick={this.handleClick} className='blog-list'>
                <div>
                    <b>{blog.title}</b>
                    <div className='time'>
                        {dayjs(blog.time).format(dateFormat)}
                    </div>
                </div>
            </List.Item>
        )
    }
}

export default ListItem
