import React from 'react'
import { Button, List } from 'antd'
import './index.less'
import ListItem from './item'
import ListHeader from './header'

class ManageBlogList extends React.Component {
    render() {
        let { onLoadMore, initLoading, loading, hasMore } = this.props
        const loadMore =
            initLoading || loading || !hasMore ? null : (
                <div className='load-more'>
                    <Button size='small' onClick={onLoadMore}>
                        加载更多
                    </Button>
                </div>
            )

        return (
            <List
                bordered
                loading={loading}
                size='small'
                className='manage-blog-list'
                header={
                    <ListHeader
                        onSearch={this.props.onSearch}
                        onAdd={this.props.onAdd}
                    />
                }
                dataSource={this.props.list}
                loadMore={loadMore}
                renderItem={blog => (
                    <ListItem item={blog} onClick={this.props.onClick} />
                )}
            />
        )
    }
}

export default ManageBlogList
