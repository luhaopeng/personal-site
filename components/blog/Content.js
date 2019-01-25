import React from 'react'
import Comment from './Comment'
import Title from './Title'
import Article from './Article'
import './Content.css'

class Content extends React.Component {
    render() {
        return (
            <div className='blog-content'>
                <Title
                    attr={{
                        id: 1,
                        title: '测试文章',
                        category: '文章',
                        tags: ['JavaScript', 'React'],
                        time: '2019-01-11 10:54:32',
                        read: 998,
                        comment: 30
                    }}
                />
                <Article />
                <Comment />
            </div>
        )
    }
}

export default Content
