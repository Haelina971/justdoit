import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from "./Forms/Input";
import { useState } from "react";
import Card from "react-bootstrap/Card";

const ToDoForm = (props) => {
    //useState to keep track of changes in input fields    
  const [userInput, setUserInput] = useState(
    {
        enteredTask: '',
        enteredDate: '',
    }
  );

  //Change enteredTask value 
  const taskChangeHandler = (event) => {
    setUserInput((prevState) => {
        return {...prevState, enteredTask: event.target.value};
    });
  }

  //Change enteredDate value
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
        return {...prevState, enteredDate: event.target.value};
    });
  }

  //Collect data from the different inputs into object
  //Reset value of input fields
  const submitHandler = (event) => {
    event.preventDefault();
    const toDoData = {
        title: userInput.enteredTask,
        date: new Date(userInput.enteredDate),
    }
    props.onSaveToDoData(toDoData);
    setUserInput({
        enteredTask:'',
        enteredDate: ''
    })
  };

  return (
    <Card className="w-75 mx-auto border-success border border-3 rounded-5 px-5 m-5 shadow">
      <Form onSubmit={submitHandler}>
        <Input
          controlId="toDoName"
          name="Task"
          type="text"
          placeholder="Enter task"
          onChange={taskChangeHandler}
          value={userInput.enteredTask}
        />
        <Input 
        controlId="toDoDate" 
        name="Date" 
        type="date" 
        min="2023-01-01"
        onChange={dateChangeHandler}
        value={userInput.enteredDate}
         />
        <Button
          variant="success"
          className="my-3"
          type="submit"
        >
          Add
        </Button>
      </Form>
    </Card>
  );
};

export default ToDoForm;
