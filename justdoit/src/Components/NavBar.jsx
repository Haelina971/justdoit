import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.png';

function NavBar() {

    //Returns NavBar when logged in
    //Need to look how to change links when not logged in
    return (
        <Navbar bg="light" className="d-flex justify-content-between">
                <Navbar.Brand href="/" className="px-3">
                    <img src={logo} className="h-25 d-inline-block" 
                    style={{width: 100}}
                    alt="Logo"
                    />
                    {' '}
                    Just Do It
                </Navbar.Brand>
                <Nav variant="pills" activeKey="mylist" className="justify-content-end">
                    <Nav.Item className="px-3"><Nav.Link href="/todolist" eventKey="mylist">My List</Nav.Link></Nav.Item>
                    <Nav.Item className="px-3"><Nav.Link href="/pages/about">About</Nav.Link></Nav.Item>
                </Nav>
        </Navbar>
    );
}

export default NavBar;
