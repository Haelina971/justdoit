import Input from "../Forms/Input";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const LogIn = (props) => {
  return (
    <Card className="m-5 p-2 w-25 mx-auto">
      <Form className="m-3">
        <Input
          controlId="formBasicEmail"
          name="Email address"
          type="email"
          placeholder="Enter email"
        />
        <Input
          controlId="formBasicPassword"
          type="password"
          placeholder="Password"
        />
        <Button variant="success" className="my-3" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default LogIn;
