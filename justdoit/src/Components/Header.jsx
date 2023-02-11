import NavBar from "./NavBar";
import logo from "../assets/logo.png"

function Header() {
    return (
        <div>
            <img src={logo} className="h-25 d-inline-block" style={{width: 100}}/>
            <NavBar/>
        </div>
    );
}

export default Header;