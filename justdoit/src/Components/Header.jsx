import NavBar from "./NavBar";
import HeroImg from '../assets/hero_img.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <div>           
            <NavBar/>
            <Card className="text-white bg-dark text-center">
                {/*Add dark overlay over image and center text*/}
                <Card.Img src={HeroImg} className="opacity-50" alt="Hero Image" />
                <Card.ImgOverlay>
                    <Card.Title>Start planning and organizing like a pro!</Card.Title>
                    <Card.Text>
                        Add small text for people to sign up
                    </Card.Text>
                    <Button variant="success">Register</Button>{' '}
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}

export default Header;