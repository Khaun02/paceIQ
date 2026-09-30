import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/training-plan">Training Plan</NavLink>
            <NavLink to="/run-log">Run Log</NavLink>
        </nav>
    </div>
  )
}

export default NavBar