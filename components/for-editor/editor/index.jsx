import React from 'react'
import { Icon } from 'antd'
import classNames from 'classnames'
import marked from '../helpers/marked'
import textInsert from '../helpers/insertText'
import IconFont from '../../iconfont'
import 'highlight.js/styles/xcode.css'
import './index.less'

class MdEditor extends React.Component {
    constructor(props) {
        super(props)

        this.$vm = null
        this.handleEditorRef = $vm => {
            this.$vm = $vm
        }

        this.state = {
            preview: false,
            expand: false,
            line_index: 1
        }
    }

    static defaultProps = {
        placeholder: '请输入内容...',
        lineNum: true
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let { value } = nextProps
        const line = value ? value.split('\n').length : 1
        if (prevState.line_index !== line) {
            return { line_index: line }
        } else {
            return null
        }
    }

    // 输入框改变
    handleChange = e => {
        const value = e.target.value
        this.props.onChange(value)
    }

    // 快捷插入
    insert = e => {
        const { $vm } = this
        const type = e.currentTarget
            ? e.currentTarget.getAttribute('data-type')
            : e
        textInsert($vm, type)
        this.props.onChange($vm.value)
    }

    handleLineIndex(value) {
        const line_index = value ? value.split('\n').length : 1
        this.setState({ line_index })
    }

    // 预览
    preview = () => {
        this.setState({
            preview: !this.state.preview
        })
    }

    // 全屏
    expand = () => {
        this.setState({
            expand: !this.state.expand
        })
    }

    render() {
        const { preview, expand, line_index } = this.state
        const { value } = this.props
        const previewClass = classNames({
            'for-panel': true,
            'for-preview-hidden': !preview
        })
        const editorClass = classNames({
            'for-panel': true
        })
        const previewActive = classNames({
            'for-active': preview
        })
        const fullscreen = classNames({
            'for-container': true,
            'for-fullscreen': expand
        })
        const expandActive = classNames({
            'for-active': expand
        })
        const lineNumStyles = classNames({
            'for-line-num': true,
            hidden: !this.props.lineNum
        })

        const lineNum = function() {
            const list = []
            for (let i = 0; i < line_index; i++) {
                list.push(<li key={i + 1}>{i + 1}</li>)
            }
            return <ul className={lineNumStyles}>{list}</ul>
        }

        return (
            <div className={fullscreen}>
                <div className='for-controlbar'>
                    <ul>
                        <li
                            data-type='h1'
                            onClick={this.insert}
                            title='一级标题'
                        >
                            H1
                        </li>
                        <li
                            data-type='h2'
                            onClick={this.insert}
                            title='二级标题'
                        >
                            H2
                        </li>
                        <li
                            data-type='h3'
                            onClick={this.insert}
                            title='三级标题'
                        >
                            H3
                        </li>
                        <li
                            data-type='h4'
                            onClick={this.insert}
                            title='四级标题'
                        >
                            H4
                        </li>
                        <li
                            data-type='image'
                            onClick={this.insert}
                            title='图片'
                        >
                            <Icon type='picture' />
                        </li>
                        <li
                            data-type='link'
                            onClick={this.insert}
                            title='超链接'
                        >
                            <Icon type='link' />
                        </li>
                        <li
                            data-type='code'
                            onClick={this.insert}
                            title='代码块'
                        >
                            <IconFont type='icon-code' />
                        </li>
                    </ul>
                    <ul>
                        <li className={expandActive} onClick={this.expand}>
                            {expandActive ? (
                                <Icon type='fullscreen-exit' />
                            ) : (
                                <Icon type='fullscreen' />
                            )}
                        </li>
                        <li className={previewActive} onClick={this.preview}>
                            {previewActive ? (
                                <Icon type='eye-invisible' />
                            ) : (
                                <Icon type='eye' />
                            )}
                        </li>
                    </ul>
                </div>
                <div className='for-editor'>
                    <div className={editorClass}>
                        <div className='for-editor-wrapper'>
                            <div className='for-editor-block'>
                                {lineNum()}
                                <div className='for-editor-content'>
                                    <pre>{value} </pre>
                                    <textarea
                                        ref={this.handleEditorRef}
                                        value={value}
                                        onChange={this.handleChange}
                                        placeholder={this.props.placeholder}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={previewClass}>
                        <div
                            className='for-preview for-markdown-preview'
                            dangerouslySetInnerHTML={{ __html: marked(value) }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default MdEditor
