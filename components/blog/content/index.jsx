import React from 'react'
import { Layout } from 'antd'
import Title from '../title'
import Article from '../article'
import './index.less'
import { readBlog } from '../../../api/blog'

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false
        }
    }

    async componentDidMount() {
        let res = await readBlog({ id: this.props.id })
        console.log(res) // eslint-disable-line
        this.setState({
            isLoaded: true,
            ...res.data.data.doc
        })
    }
    
    render() {
        return !this.state.isLoaded ? null : (
            <Layout.Content className='blog-content'>
                <Title attr={this.state} />
                <Article content={this.state.content} />
            </Layout.Content>
        )
    }
}

export default Content
