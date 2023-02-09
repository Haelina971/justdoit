import NavItem from './NavItem';
import { Link } from 'react-router-dom';

function NavBar() {

    //Returns NavBar when logged in
    //Need to look how to change links when not logged in
    return (
        <nav className="nav">
            <Link to="/">App Name</Link>
            <ul>
                <NavItem to="/todolist">My List</NavItem>
                <NavItem to="/pages/about">About</NavItem>
            </ul>
        </nav>
    );
}

export default NavBar;
