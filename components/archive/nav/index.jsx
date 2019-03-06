import React from 'react'
import styled from 'styled-components'
import { primary_color, transparent } from '../../../utils/theme'

const Ul = styled.ul`
    list-style-type: none;
`

const A = styled.a`
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
    background-color: ${props =>
        props.selected ? primary_color : transparent};
    transition: all linear 0.15s;
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
    }

    render() {
        return (
            <Ul>
                {['2019', '2018', '2017', '2016'].map(val => {
                    return (
                        <li key={val}>
                            <A
                                data-key={val}
                                selected={this.state.selectedKey === val}
                                onClick={this.handleClick}
                            >
                                {val}
                            </A>
                        </li>
                    )
                })}
            </Ul>
        )
    }
}

export default YearList
