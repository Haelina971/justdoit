import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import Card from "react-bootstrap/Card";

const ToDoList = () => {
  //Arrays of ToDoItems
  const items = [
    { title: "Learn React", date: new Date(2023, 2, 1) },
    { title: "Build ToDo App", date: new Date(2023, 2, 10) },
  ];

  //Renders different ToDoItems
  return (
    <div>
      <ToDoForm />
      <Card className="w-50 mx-auto m-5 border-0 shadow-sm">
        <ToDoItem title={items[0].title} date={items[0].date} />
        <ToDoItem title={items[1].title} date={items[1].date} />
      </Card>
    </div>
  );
};

export default ToDoList;
