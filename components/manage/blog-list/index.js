import React from 'react'
import { List } from 'antd'
import './index.less'
import ListItem from './list-item'

class ManageBlogList extends React.Component {
    handleClick = item => {
        console.log(item._id) // eslint-disable-line
    }
    render() {
        return (
            <List
                bordered
                className='manage-blog-list'
                header={<div>Header</div>}
                dataSource={this.props.list}
                renderItem={blog => (
                    <ListItem item={blog} onClick={this.handleClick} />
                )}
            />
        )
    }
}

export default ManageBlogList
