import React from 'react'
import Link  from 'react-router-dom'
import { NavMenu } from './style/styled'

export default function Menu() {

    return(
        <NavMenu>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tarefa">Home</Link></li>
            </ul>
        </NavMenu>
    )
}