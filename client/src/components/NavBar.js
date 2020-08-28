import React from "react";
import logo from "../logo.png";
import "../App.css";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
  return (
    // <Navbar bg="light">
    //   <Navbar.Brand href="/">
    //     {/* <img
    //       src={logo}
    //       width="50"
    //       height="50"
    //       className="d-inline-block align-top"
    //       alt="Task Aligning logo"
    //     /> */}
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav>
    //       <NavDropdown title="Actions">
    //         <NavDropdown.Item href="/addtask">Add Task</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="/individual">
    //           Search Individual
    //         </NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="/teams">View Teams</NavDropdown.Item>
    //         <NavDropdown.Item href="/weekly">
    //           View Weekly Tasks
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //       <Nav.Link href="/login">Log In</Nav.Link>
    //       <Nav.Link href="/settings">Settings</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <nav>
      <ul className='nav-links'>
        <img className="nav-logo" src={logo} />
        <li className='nav-item'><a href="">Individual</a></li>
        <li className='nav-item'><a href="">Teams</a></li>
        <li className='nav-item'><a href="">Weekly</a></li>
        <li className='nav-item'><a href="">Login</a></li>
        <li className='nav-item'><a href="/register">Register</a></li>
        <li className='nav-item'><a href="">Settings</a></li>
        <li className='nav-item'><a href="">Individual</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
