import React from 'react'
import Link from 'next/link'
import { Icon } from 'antd'
import './index.less'

class Pager extends React.Component {
    static defaultProps = {
        prevLink: '',
        prevLabel: '',
        nextLink: '',
        nextLabel: ''
    }

    render() {
        return (
            <section className='pager'>
                <Link href={this.props.prevLink}>
                    <a>
                        {!this.props.prevLink ? null : (
                            <React.Fragment>
                                <Icon type='left' className='icon prev-icon' />
                                {this.props.prevLabel}
                            </React.Fragment>
                        )}
                    </a>
                </Link>
                <Link href={this.props.nextLink}>
                    <a>
                        {!this.props.nextLink ? null : (
                            <React.Fragment>
                                {this.props.nextLabel}
                                <Icon type='right' className='icon next-icon' />
                            </React.Fragment>
                        )}
                    </a>
                </Link>
            </section>
        )
    }
}

export default Pager
