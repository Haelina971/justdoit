import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Input from "./Input";

const IDForm = (props) => {
  return (
    <Card className="m-5 p-2 w-25 mx-auto">
      <Form className="m-3">
        <Input
          controlId="formBasicEmail"
          name="Email address"
          type="email"
          placeholder="Enter email"
          onChange={props.onChange}
        />
        <Input
          controlId="formBasicPassword"
          type="password"
          placeholder="Password"
          onChange={props.onChange}
        />
        <Button variant="success" className="my-3" type="submit">
          {props.action}
        </Button>
      </Form>
    </Card>
  );
};

export default IDForm;
