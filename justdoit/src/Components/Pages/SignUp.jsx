import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function SignUp() {
    return (
      <Card className='m-5 p-2 w-25 mx-auto'>
        <Form className="m-3">
          <Form.Group controlId="formBasicEmail" className='my-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className='my-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="success" className='my-3' type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    );
}

export default SignUp;