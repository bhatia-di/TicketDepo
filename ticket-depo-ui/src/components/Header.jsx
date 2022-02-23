import React from "react";
import {Navbar, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarBrand,NavbarText, NavbarToggler, NavItem, Nav, Collapse} from "reactstrap";

export default function Header() {

return (
<div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">

    <span className="color-aqua">Ticket-Depo</span>
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/dashboard">
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/you" >
            My Profile
          </NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink href="/about" active>
            About us
          </NavLink>
        </NavItem>

      </Nav>

    </Collapse>
  </Navbar>
</div>


);


}