import ToDoForm from "./ToDoForm";
import Card from "react-bootstrap/Card";

const NewToDo = (props) => {
    //Used as props value to pass data as an intermediary 
    //from children ToDoForm
    //to ToDoList
  const saveToDoDataHandler = (enteredToDoData) => {
    const toDoData = {
      ...enteredToDoData,
      id: Math.random().toString(), //Change for counter later
    };
    console.log(toDoData);
    props.onAddToDoItem(toDoData);
  };

  return (
      <ToDoForm onSaveToDoData={saveToDoDataHandler} />
  );
};

export default NewToDo;
