import React from 'react'
import { Input, Row, Col, Button } from 'antd'

const Search = Input.Search

class ListHeader extends React.Component {
    handleSearch = value => {
        let { onSearch } = this.props
        !!onSearch && typeof onSearch === 'function' && onSearch(value.trim())
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
            <div>
                <Row type='flex' gutter={4}>
                    <Col style={{ flex: '1' }}>
                        <Search
                            placeholder='搜索标题'
                            onSearch={this.handleSearch}
                        />
                    </Col>
                    <Col>
                        <Button.Group>
                            <Button icon='plus' onClick={this.handleAdd} />
                            <Button icon='sync' onClick={this.handleRefresh} />
                        </Button.Group>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ListHeader