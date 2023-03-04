import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Input from "./Input";
import { useState } from "react";

const IDForm = (props) => {
  const [userInput, setUserInput] = useState(
    {
        enteredEmail: '',
        enteredPassword: '',
    }
  );

  //Change enteredEmail value 
  const emailChangeHandler = (event) => {
    setUserInput((prevState) => {
        return {...prevState, enteredEmail: event.target.value};
    });
  }

  //Change enteredPassword value
  const passwordChangeHandler = (event) => {
    setUserInput((prevState) => {
        return {...prevState, enteredPassword: event.target.value};
    });
  }

  //Collect data from the different inputs into object
  //Reset value of input fields
  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
        email: userInput.enteredEmail,
        password: userInput.enteredPassword,
    }
    //props.onSaveUserData(userData);
    console.log(userData);
    setUserInput({
        enteredEmail:'',
        enteredPassword: ''
    })
  };

  return (
    <Card className="m-5 p-2 w-25 mx-auto">
      <Form className="m-3" onSubmit={submitHandler}>
        <Input
          controlId="formBasicEmail"
          name="Email address"
          type="email"
          placeholder="Enter email"
          onChange={emailChangeHandler}
          value={userInput.enteredEmail}
          autoComplete="email"
        />
        <Input
          controlId="formBasicPassword"
          type="password"
          placeholder="Password"
          onChange={passwordChangeHandler}
          value={userInput.enteredPassword}
          autoComplete="password"
        />
        <Button variant="success" className="my-3" type="submit">
          Register
        </Button>
      </Form>
    </Card>
  );
};

export default IDForm;
