import React, { Component } from 'react';

import { Nav, Navbar, NavItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="https://marcelobohn.github.io/app-resume">Currículo JSON</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={2} href="#">Modelo</NavItem>
          <NavItem eventKey={2} href="#">Sobre</NavItem>
        </Nav>
      </Navbar>
    );
  }
};

export default Header;
