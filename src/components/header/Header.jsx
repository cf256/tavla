import React from 'react'
import moment from 'moment'
import './styles.css'

const Header = () => (
    <div className="header">
        <h1>{moment().format('HH:mm')}</h1>
    </div>
)

export default Header
