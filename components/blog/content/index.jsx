import React from 'react'
import { Layout, Empty, Row, Col } from 'antd'
import Title from '../title'
import Article from '../article'
import Toc from '../toc'
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
        this.setState({
            isLoaded: true,
            ...res.data.data.doc
        })
    }

    render() {
        return !this.state.isLoaded ? (
            <Empty />
        ) : (
            <Layout.Content className='blog-content'>
                <Row>
                    <Col span={20}>
                        <Title attr={this.state} />
                        <Article content={this.state.content} />
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
