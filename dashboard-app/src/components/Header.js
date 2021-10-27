import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
   return (
      <>
         <Navbar bg='light' variant='light'>
            <Container>
               <Navbar.Brand as={Link} to='/'>
                  Dashboard
               </Navbar.Brand>
               <Nav className='me-auto'>
                  <Nav.Link as={Link} to='/'>
                     Home
                  </Nav.Link>
               </Nav>
            </Container>
         </Navbar>
      </>
   )
}

export default Header
