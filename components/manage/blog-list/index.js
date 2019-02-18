import React from 'react'
import { List } from 'antd'
import dayjs from 'dayjs'
import './index.less'

const dateFormat = 'YYYY-MM-DD HH:mm:ss'

class ManageBlogList extends React.Component {
    render() {
        return (
            <List
                header={<div>Header</div>}
                bordered
                className='manage-blog-list'
                dataSource={this.props.list}
                renderItem={blog => (
                    <List.Item key={blog._id} onClick={this.handleListClick}>
                        <List.Item.Meta
                            title={blog.title}
                            description={dayjs(blog.time).format(dateFormat)}
                        />
                    </List.Item>
                )}
            />
        )
    }
}

export default ManageBlogList
