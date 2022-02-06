import React from 'react';
import {Navbar,Nav,Container} from "react-bootstrap";

const header = () => {
  return (<div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React Blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='Ml-auto'>
      <Nav.Link href="#deets">Link</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
      );
};

export default header;
