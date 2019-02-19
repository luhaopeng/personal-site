import React from 'react'
import { Row, Col, Layout, Input, Button, Select } from 'antd'
import Editor from '../../for-editor'
import IconFont from '../../iconfont'
import { readBlog, createBlog } from '../../../api/blog'

const { Content } = Layout
const { Option } = Select

class ManageContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { title: '', content: '', tags: [], category: 'article' }
    }

    handleTitleChange = e => {
        this.setState({ title: e.target.value })
    }

    handleContentChange = content => {
        this.setState({ content })
    }

    handleTagsChange = tags => {
        this.setState({ tags })
    }

    handleCategoryChange = category => {
        this.setState({ category })
    }

    handlePublish = () => {
        let { title, content, tags, category } = this.state
        createBlog({ title, content, tags, category }).catch(error => {
            let reason = error.response.data.msg
            if (/duplicate key/i.test(reason)) {
                console.log('标题不能重复') // eslint-disable-line
            }
        })
    }

    async componentWillReceiveProps(nextProps) {
        if (nextProps.id) {
            let { data } = await readBlog({ id: nextProps.id, fromManage: true })
            let { title, content, tags, category } = data.doc
            this.setState({ title, content, tags, category })
        } else {
            this.setState({
                title: '',
                content: '',
                tags: [],
                category: 'article'
            })
        }
    }

    render() {
        return (
            <Content style={{ margin: 20 }}>
                <Row
                    type='flex'
                    justify='space-between'
                    align='middle'
                    gutter={16}
                >
                    <Col style={{ flex: '1' }}>
                        <Input
                            value={this.state.title}
                            size='large'
                            onChange={this.handleTitleChange}
                            placeholder='文章标题'
                        />
                    </Col>
                    <Col>
                        <Button
                            size='large'
                            type='primary'
                            onClick={this.handlePublish}
                        >
                            <IconFont type='icon-publish' />
                            发布
                        </Button>
                    </Col>
                    <Col>
                        <Button size='large' icon='save'>
                            保存
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
                <Row
                    type='flex'
                    justify='space-between'
                    align='middle'
                    gutter={16}
                    style={{ marginTop: '8px', marginBottom: '8px' }}
                >
                    <Col>
                        <Select
                            value={this.state.category}
                            onChange={this.handleCategoryChange}
                            style={{ width: 120 }}
                        >
                            <Option value='article'>文章</Option>
                            <Option value='translate'>翻译</Option>
                            <Option value='essay'>随笔</Option>
                        </Select>
                    </Col>
                    <Col style={{ flex: '1' }}>
                        <Select
                            value={this.state.tags}
                            mode='tags'
                            style={{ width: '100%' }}
                            onChange={this.handleTagsChange}
                            placeholder='标签'
                            tokenSeparators={[',']}
                        />
                    </Col>
                </Row>
                <Editor
                    value={this.state.content}
                    onChange={this.handleContentChange}
                />
            </Content>
        )
    }
}

export default ManageContent
