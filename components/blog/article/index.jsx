import React from 'react'
import marked from '../../for-editor/helpers/marked'
import './index.less'
import '../../../static/style/markdown.less'
import 'highlight.js/styles/xcode.css'

class Article extends React.Component {
    render() {
        return (
            <div
                className='markdown-body'
                dangerouslySetInnerHTML={{ __html: marked(this.props.content) }}
            />
        )
    }
}

export default Article
