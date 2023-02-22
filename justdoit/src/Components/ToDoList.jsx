import ToDoItem from "./ToDoItem";
import Card from "react-bootstrap/Card";

const ToDoList = (props) => {
  //Arrays of ToDoItems
  const items = [
    { title: "Learn React", date: new Date(2023, 2, 1) },
    { title: "Build ToDo App", date: new Date(2023, 2, 10) },
  ];

  //Add new ToDoItem
  const addToDoItemHandler = (item) => {
    console.log("In ToDoList");
    console.log(item);
  }

  //Renders different ToDoItems
  return (
    <div>
      <Card className="w-75 mx-auto m-5 border-0 shadow-sm">
        <ToDoItem title={items[0].title} date={items[0].date} />
        <ToDoItem title={items[1].title} date={items[1].date} />
      </Card>
    </div>
  );
};

export default ToDoList;
