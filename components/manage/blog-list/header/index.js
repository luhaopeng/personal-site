import React from 'react'
import { Input, Row, Col, Button } from 'antd'

const Search = Input.Search

class ListHeader extends React.Component {
    render() {
        return (
            <div>
                <Row type='flex' gutter={4}>
                    <Col style={{ flex: '1' }}>
                        <Search
                            placeholder='搜索标题'
                            onSearch={this.props.onSearch}
                        />
                    </Col>
                    <Col>
                        <Button icon='plus' onClick={this.props.onAdd} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ListHeader
