import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div>
            <Navbar fixed="top" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand> <Button variant="primary">News </Button> <span className='text-primary'>Portal</span></Navbar.Brand>
                    <Navbar.Toggle className='text-white' aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className=''>
                                <Link style={{ color: "white", textDecoration: 'none' }} to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link style={{ color: "white", textDecoration: 'none' }} to='/'>All news </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link style={{ color: "white", textDecoration: 'none' }} to='/contact'>Contact </Link>
                            </Nav.Link>
                        </Nav>
                        <div >
                            <Link className='me-2' to='/login' >
                                <Button variant="outline-success">
                                    Login
                                </Button>
                            </Link>
                            <Link className='me-2' to='/register'>
                                <Button variant="outline-info">
                                    Register
                                </Button>
                            </Link>
                            <Link>
                                <Button variant="outline-danger">
                                    Logout
                                </Button>
                            </Link>
                        </div>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;