import React from 'react'
import { List } from 'antd'
import './index.less'
import ListItem from './item'
import ListHeader from './header'

class ManageBlogList extends React.Component {
    handleClick = item => {
        let { onClick } = this.props
        !!onClick && typeof onClick === 'function' && onClick(item)
    }

    handleSearch = value => {
        let { onSearch } = this.props
        !!onSearch && typeof onSearch === 'function' && onSearch(value)
    }

    handleAdd = () => {
        let { onAdd } = this.props
        !!onAdd && typeof onAdd === 'function' && onAdd()
    }

    handleRefresh = () => {
        let { onRefresh } = this.props
        !!onRefresh && typeof onRefresh === 'function' && onRefresh()
    }

    render() {
        return (
            <List
                bordered
                size='small'
                className='manage-blog-list'
                header={
                    <ListHeader
                        onSearch={this.handleSearch}
                        onAdd={this.handleAdd}
                        onRefresh={this.handleRefresh}
                    />
                }
                dataSource={this.props.list}
                renderItem={blog => (
                    <ListItem item={blog} onClick={this.handleClick} />
                )}
            />
        )
    }
}

export default ManageBlogList
