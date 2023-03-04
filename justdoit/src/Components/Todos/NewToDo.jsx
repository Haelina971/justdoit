import ToDoForm from "./ToDoForm";

const NewToDo = (props) => {
  //Used as props value to pass data as an intermediary
  //from children ToDoForm
  //to ToDos
  const saveToDoDataHandler = (enteredToDoData) => {
    const toDoData = {
      ...enteredToDoData,
      id: Math.random().toString(), //Change for counter later
    };
    props.onAddToDoItem(toDoData);
  };

  return <ToDoForm onSaveToDoData={saveToDoDataHandler} />;
};

export default NewToDo;
