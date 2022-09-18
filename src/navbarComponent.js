import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images.png'
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';


const NavbarComponent = () => {

    
    return (
        <Navbar expand="lg" className='nav'>
            <Container className='container-fluid' fluid>
                <LinkContainer to="/">
                    <Navbar.Brand href="#home" id='logo'>
                        <img src={logo} alt='logo' id='logo'/>
                        KAMITHERAPY
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to ="/">
                            <Nav.Link className='link1 lk1'>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/questions">
                            <Nav.Link className='link1 lk5'>FAQ</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to ="/review">
                            <Nav.Link className='link1 lk6'>Reviews</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link> 
                                <Button  className='btnlog link1'> Login</Button> 
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/getstarted">
                            <Nav.Link> 
                                <Button className='btnsub lkgs' type="submit"> Get started</Button>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;