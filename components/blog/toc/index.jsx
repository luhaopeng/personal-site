import React from 'react'
import { Anchor } from 'antd'
import extract from './helper/extract'

class Toc extends React.Component {
    render() {
        let toc = extract(this.props.src)
        let items = toc.map(({ content, slug }) => (
            <Anchor.Link key={slug} href={`#${slug}`} title={content} />
        ))
        return (
            <Anchor offsetTop={40} style={{ paddingTop: '40px' }}>
                {items}
            </Anchor>
        )
    }
}

export default Toc
