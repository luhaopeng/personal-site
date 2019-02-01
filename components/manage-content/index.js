import React from 'react'
import { Row, Col, Layout, Input, Button } from 'antd'
import Editor from '../for-editor'
import IconFont from '../iconfont'

const { Content } = Layout

class ManageContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
        }
    }

    handleTitleChange = e => {
        this.setState({ title: e.target.value })
    }

    handleContentChange = content => {
        this.setState({ content })
    }

    render() {
        return (
            <Content style={{ margin: 15 }}>
                <Row
                    type='flex'
                    justify='space-between'
                    align='middle'
                    gutter={16}
                >
                    <Col style={{ flex: '1 1 auto' }}>
                        <Input
                            value={this.state.title}
                            size='large'
                            onChange={this.handleTitleChange}
                            placeholder='文章标题'
                        />
                    </Col>
                    <Col>
                        <Button size='large' type='primary'>
                            <IconFont type='icon-publish' />
                            发布
                        </Button>
                    </Col>
                    <Col>
                        <Button size='large' icon='export'>
                            导出
                        </Button>
                    </Col>
                    <Col>
                        <Button size='large' type='danger' icon='delete'>
                            删除
                        </Button>
                    </Col>
                </Row>
                <br />
                <Editor
                    value={this.state.content}
                    onChange={this.handleContentChange}
                />
            </Content>
        )
    }
}

export default ManageContent
