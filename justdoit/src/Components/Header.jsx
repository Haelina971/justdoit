import NavBar from "./NavBar";
import HeroImg from '../assets/hero_img.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <div>           
            <NavBar/>
            <Card>
                {/*Add dark overlay over image and center text*/}
                <Card.Img src={HeroImg} alt="Hero Image" />
                <Card.ImgOverlay className="d-flex align-items-center">
                    <Card className="mx-auto p-5">
                        <Card.Title>Start planning and organizing like a pro!</Card.Title>
                        <Card.Text>
                            Add small text for people to sign up
                        </Card.Text>
                        <Button className="mt-5" variant="success">Register</Button>{' '}
                    </Card>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}

export default Header;