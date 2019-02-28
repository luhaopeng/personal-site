import React from 'react'
import {
    Row,
    Col,
    Layout,
    Input,
    Button,
    Select,
    message,
    Popconfirm
} from 'antd'
import Editor from '../../for-editor'
import IconFont from '../../iconfont'
import { readBlog, createBlog, updateBlog, deleteBlog } from '../../../api/blog'
import { errorMsg } from '../../../utils/common'
import { saveAs } from 'file-saver'

const { Content } = Layout
const { Option } = Select

const initialState = {
    title: '',
    content: '',
    tags: [],
    category: 'article',
    publishing: false,
    saving: false,
    deleting: false,
    confirmVisible: false
}

class ManageContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    reportChange = (id = undefined) => {
        let { onChange } = this.props
        onChange && typeof onChange === 'function' && onChange(id)
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
        title = title.trim()
        this.setState({ publishing: true })
        if (this.props.id) {
            updateBlog(
                {
                    title,
                    content,
                    tags,
                    category,
                    id: this.props.id,
                    draft: false
                },
                { auth: this.props.auth }
            )
                .then(() => {
                    message.success('发布成功')
                    this.reportChange(this.props.id)
                })
                .catch(error => {
                    message.error(errorMsg(error))
                })
                .then(() => {
                    this.setState({ publishing: false })
                })
        } else {
            createBlog(
                { title, content, tags, category, draft: false },
                { auth: this.props.auth }
            )
                .then(res => {
                    message.success('发布成功')
                    this.reportChange(res.data.id)
                })
                .catch(error => {
                    message.error(errorMsg(error))
                })
                .then(() => {
                    this.setState({ publishing: false })
                })
        }
    }

    handleSave = () => {
        let { title, content, tags, category } = this.state
        title = title.trim()
        this.setState({ saving: true })
        if (this.props.id) {
            updateBlog(
                { title, content, tags, category, id: this.props.id },
                { auth: this.props.auth }
            )
                .then(() => {
                    message.success('草稿已保存')
                    this.reportChange(this.props.id)
                })
                .catch(error => {
                    message.error(errorMsg(error))
                })
                .then(() => {
                    this.setState({ saving: false })
                })
        } else {
            createBlog(
                { title, content, tags, category },
                { auth: this.props.auth }
            )
                .then(res => {
                    message.success('草稿已保存')
                    this.reportChange(res.data.id)
                })
                .catch(error => {
                    message.error(errorMsg(error))
                })
                .then(() => {
                    this.setState({ saving: false })
                })
        }
    }

    handleExport = () => {
        let file = new File(
            [this.state.content],
            `${this.state.title.trim()}.md`,
            {
                type: 'text/plain;charset=utf-8'
            }
        )
        saveAs(file)
    }

    handleDelete = () => {
        this.setState({ deleting: true })
        deleteBlog({ id: this.props.id }, { auth: this.props.auth })
            .then(() => {
                message.success('文章已删除')
                this.reportChange()
            })
            .catch(error => {
                message.error(errorMsg(error))
            })
            .then(() => {
                this.setState({ deleting: false })
            })
    }

    handleConfirmVisible = visible => {
        if (!visible || this.props.id) {
            this.setState({ confirmVisible: visible })
        }
    }

    async componentWillReceiveProps(nextProps) {
        if (nextProps.id === this.props.id) return
        if (nextProps.id) {
            let { data } = await readBlog(
                {
                    id: nextProps.id
                },
                {
                    from: 'manage'
                }
            )
            let { title, content, tags, category } = data.doc
            this.setState({ title, content, tags, category })
        } else {
            this.setState(initialState)
        }
    }

    render() {
        return (
            <Content style={{ margin: 20 }}>
                <Row type='flex' justify='space-between' align='middle'>
                    <Col style={{ flex: '1' }}>
                        <Input
                            value={this.state.title}
                            size='large'
                            onChange={this.handleTitleChange}
                            placeholder='文章标题'
                        />
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
                    <Col>
                        <Button
                            type='primary'
                            onClick={this.handlePublish}
                            loading={this.state.publishing}
                            disabled={
                                !this.state.title.trim() ||
                                !this.state.content.trim()
                            }
                        >
                            <IconFont type='icon-publish' />
                            发布
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            icon='save'
                            onClick={this.handleSave}
                            loading={this.state.saving}
                            disabled={
                                !this.state.title.trim() ||
                                !this.state.content.trim()
                            }
                        >
                            保存
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            icon='export'
                            onClick={this.handleExport}
                            disabled={
                                !this.state.title.trim() ||
                                !this.state.content.trim()
                            }
                        >
                            导出
                        </Button>
                    </Col>
                    <Col>
                        <Popconfirm
                            visible={this.state.confirmVisible}
                            title='删除结果不可撤销'
                            onConfirm={this.handleDelete}
                            onVisibleChange={this.handleConfirmVisible}
                            okText='删除'
                            cancelText='取消'
                        >
                            <Button
                                type='danger'
                                icon='delete'
                                loading={this.state.deleting}
                                disabled={!this.props.id}
                            >
                                删除
                            </Button>
                        </Popconfirm>
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
