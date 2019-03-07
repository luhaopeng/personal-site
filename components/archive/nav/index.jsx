import React from 'react'
import './index.less'

class YearList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedKey: this.props.list[0]
        }
    }

    handleClick = e => {
        let { key } = e.target.dataset
        this.setState({ selectedKey: key })
        let onClick = this.props.onClick
        onClick && typeof onClick === 'function' && onClick(key)
    }

    render() {
        return (
            <ul className='year-list'>
                {this.props.list.map(val => (
                    <li key={val}>
                        <a
                            className={`list-item ${
                                this.state.selectedKey === val
                                    ? 'selected'
                                    : null
                            }`}
                            data-key={val}
                            onClick={this.handleClick}
                        >
                            {val}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }
}

export default YearList
