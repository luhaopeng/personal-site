import React from 'react'
import './index.less'

class YearList extends React.Component {
    render() {
        return (
            <ul className='year-list'>
                <li>
                    <a className='list-item selected'>2019</a>
                </li>
                <li>
                    <a className='list-item'>2018</a>
                </li>
                <li>
                    <a className='list-item'>2017</a>
                </li>
                <li>
                    <a className='list-item'>2016</a>
                </li>
            </ul>
        )
    }
}

export default YearList
