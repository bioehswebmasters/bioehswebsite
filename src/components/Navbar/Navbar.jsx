import React from 'react'
import { Nav, NavLink, NavMenu } from './NavbarElements'
//link to pages might be wrong lowkey... check later haha
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/pages/Home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/pages/Decal" activeStyle>
            Decal
          </NavLink>
          <NavLink to="/pages/BioEHSC" activeStyle>
            BioEHSC
          </NavLink>
          <NavLink to="/pages/Committees" activeStyle>
            Committees
          </NavLink>
          <NavLink to="/pages/Leadership" activeStyle>
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
