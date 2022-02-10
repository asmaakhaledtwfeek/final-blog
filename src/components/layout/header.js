import React from 'react';

import { NavLink } from 'react-router-dom';
import {Navbar,Nav,Container} from "react-bootstrap";

const header = () => {
  return (<div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React Blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='Ml-auto'>
      < NavLink className='nav-link' to="/" exact>Home</ NavLink>
      < NavLink className='nav-link'to={{
        pathname:"/blog",
        hash:"#star",
        search:"?page=1&sort=top"
      }}>Blog</ NavLink>
      < NavLink className='nav-link' to="/blog/add">Add Post</ NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
);
};

export default header;
