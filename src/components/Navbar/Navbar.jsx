import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
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
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;
