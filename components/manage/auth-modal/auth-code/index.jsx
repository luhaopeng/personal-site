import React from 'react'
import { Row, Col } from 'antd'
import './index.less'

class AuthCode extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    static defaultProps = {
        length: 6
    }

    handleInput = e => {
        let { value } = e.target
        if (!/\D/.test(value)) {
            let { onChange } = this.props
            this.setState({ value })
            typeof onChange === 'function' && onChange(value)
        }
        if (value.length === this.props.length) {
            let { onComplete } = this.props
            onComplete && typeof onComplete === 'function' && onComplete(value)
        }
    }

    handleFocus = () => {
        this.hiddenInput.focus()
    }

    componentDidMount() {
        this.handleFocus()
    }

    render() {
        return (
            <Row
                style={{ margin: '20px 20px 0' }}
                type='flex'
                justify='space-between'
                gutter={16}
                onClick={this.handleFocus}
            >
                {new Array(this.props.length).fill(0).map((val, index) => (
                    <Col span={4} key={index}>
                        <div
                            className={
                                this.props.error
                                    ? 'digit error'
                                    : index < this.state.value.length
                                        ? 'digit focus'
                                        : 'digit'
                            }
                        >
                            {this.state.value.substr(index, 1)}
                        </div>
                    </Col>
                ))}
                <input
                    autoFocus
                    type='text'
                    maxLength={this.props.length}
                    value={this.state.value}
                    onChange={this.handleInput}
                    autoComplete='off'
                    className='hidden-input'
                    ref={input => {
                        this.hiddenInput = input
                    }}
                />
            </Row>
        )
    }
}

export default AuthCode
