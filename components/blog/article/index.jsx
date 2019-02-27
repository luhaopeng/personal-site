import React from 'react'
import marked from 'marked'
import './index.less'
import '../../../static/style/markdown.less'

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
