import React from 'react'
import { Layout, Empty, Row, Col } from 'antd'
import Title from '../title'
import Article from '../article'
import Toc from '../toc'
import Pager from '../pager'
import './index.less'
import { readBlog } from '../../../api/blog'

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            isLoaded: false,
            prev: [],
            next: []
        }
    }

    retriveBlog = async () => {
        let res = await readBlog({ id: this.state.id })
        this.setState({
            isLoaded: true,
            ...res.data.data.doc,
            prev: res.data.data.prev,
            next: res.data.data.next
        })
    }

    componentDidMount() {
        this.retriveBlog()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.state.id) {
            this.retriveBlog()
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.id !== prevState.id) {
            return { isLoaded: false, id: nextProps.id }
        } else {
            return null
        }
    }

    render() {
        let { prev, next } = this.state
        let pagerParams = {
            prevLink: prev.length > 0 ? `/blog?id=${prev[0]._id}` : '',
            prevLabel: prev.length > 0 ? prev[0].title : '',
            nextLink: next.length > 0 ? `/blog?id=${next[0]._id}` : '',
            nextLabel: next.length > 0 ? next[0].title : ''
        }
        return !this.state.isLoaded ? (
            <Empty />
        ) : (
            <Layout.Content className='blog-content'>
                <Row>
                    <Col span={20}>
                        <Title attr={this.state} />
                        <Article content={this.state.content} />
                        <Pager {...pagerParams} />
                    </Col>
                    <Col span={4}>
                        <Toc src={this.state.content} />
                    </Col>
                </Row>
            </Layout.Content>
        )
    }
}

export default Content
