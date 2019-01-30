import React from 'react'
import Comment from './Comment'
import Title from './Title'
import Article from './Article'
import './Content.less'
import { readBlog } from '../../api/blog'

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false
        }
    }
    async componentDidMount() {
        let { data } = await readBlog({ id: this.props.id })
        let { doc } = data
        this.setState({
            isLoaded: true,
            ...doc
        })
    }
    render() {
        return !this.state.isLoaded ? null : (
            <div className='blog-content'>
                <Title attr={this.state} />
                <Article content={this.state.content} />
                <Comment />
            </div>
        )
    }
}

export default Content
