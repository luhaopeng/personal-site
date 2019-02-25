import React from 'react'
import { List } from 'antd'
import './index.less'
import ListItem from './item'
import ListHeader from './header'

class ManageBlogList extends React.Component {
    render() {
        return (
            <List
                bordered
                size='small'
                className='manage-blog-list'
                header={
                    <ListHeader
                        onSearch={this.props.onSearch}
                        onAdd={this.props.onAdd}
                    />
                }
                dataSource={this.props.list}
                renderItem={blog => (
                    <ListItem item={blog} onClick={this.props.onClick} />
                )}
            />
        )
    }
}

export default ManageBlogList
