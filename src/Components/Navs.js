import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Navs extends React.Component {
  render() {
    return (
      <div>
        <p>Choose what to filter by:</p>
        <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        </div>
    )}
}