import React from 'react'
import { Nav, NavLink, NavMenu } from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/decal" activeStyle>
            Decal
          </NavLink>
          <NavLink to="/BioEHSC" activeStyle>
            BioEHSC
          </NavLink>
          <NavLink to="/Committees" activeStyle>
            Committees
          </NavLink>
          <NavLink to="/leadership" activeStyle>
            Leadership
          </NavLink>
          <NavLink to="/coursemap" activeStyle>
            Course Map
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar
