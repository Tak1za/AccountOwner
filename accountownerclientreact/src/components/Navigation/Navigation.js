import React from "react";
import "./Navigation.css";
import { Col, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = props => {
  return (
    <Col md={12}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
            <NavLink to={'/'} exact>
                Account-Owner
            </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to={'/owner-list'} exact>Owner Actions</NavLink>
            <NavLink to={'/account-list'} exact>Account Actions</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

export default Navigation;
