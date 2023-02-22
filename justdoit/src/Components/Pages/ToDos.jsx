import NewToDo from "../NewToDo";
import ToDoList from "../ToDoList";
import Card from "react-bootstrap/Card";

const ToDos = () => {
  //Arrays of ToDoItems
  const items = [
    { title: "Learn React", date: new Date(2023, 2, 1) },
    { title: "Build ToDo App", date: new Date(2023, 2, 10) },
  ];


  //Add new ToDoItem
  const addToDoItemHandler = (item) => {
    console.log("In ToDos");
    console.log(item);
  }

    return (
        <Card className="w-75 mx-auto m-5 border-0 shadow-sm">
            <NewToDo onAddToDoItem={addToDoItemHandler}/>
            <ToDoList items={items}/>
        </Card>
    );
}

export default ToDos;