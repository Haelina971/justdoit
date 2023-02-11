import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../assets/logo.png';

function NavBar() {

    //Returns NavBar when logged in
    //Need to look how to change links when not logged in
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} className="h-25 d-inline-block align-top" 
                    style={{width: 100}}
                    alt="Logo"
                    />
                    {' '}
                    Just Do It
                </Navbar.Brand>
                <NavItem to="/todolist">My List</NavItem>
                <NavItem to="/pages/about">About</NavItem>
            </Container>
        </Navbar>
    );
}

export default NavBar;
