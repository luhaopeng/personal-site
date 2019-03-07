import React from 'react'
import styled from 'styled-components'
import { primary_color as primary, transparent } from '../../utils/theme'

const Ul = styled.ul`
    list-style-type: none;
`

const Item = styled.div`
    font-size: 12px;
    border-radius: 3px;
    color: ${props => (props.selected ? '#fff' : '#586069')};
    cursor: pointer;
    display: block;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    background-color: ${props => (props.selected ? primary : transparent)};
    transition: all linear 0.15s;

    &:hover {
        background-color: ${props => (props.selected ? primary : '#eaecef')};
    }
`

class YearList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedKey: '2019'
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
            <Ul>
                {['2019', '2018', '2017', '2016'].map(val => {
                    return (
                        <li key={val}>
                            <Item
                                data-key={val}
                                selected={this.state.selectedKey === val}
                                onClick={this.handleClick}
                            >
                                {val}
                            </Item>
                        </li>
                    )
                })}
            </Ul>
        )
    }
}

export default YearList
