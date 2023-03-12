import ToDoItem from "./ToDoItem";
import Card from "react-bootstrap/Card";
import ToDoFilter from "../Todos/ToDoFilter";
import { useState } from "react";

const ToDoList = (props) => {
  //Managing filter
  const [searchTask, setSearchTask] = useState("inprogress");

  const filterChangeHandler = (value) => {
    setSearchTask(value);
    console.log(value);
  };

  //Renders different ToDoItems
  return (
    <div>
      <ToDoFilter filterValue={searchTask} onChangeFilter={filterChangeHandler}/>
      <Card className="w-75 mx-auto m-5 border-0 shadow-sm">
        {/* Render list of ToDoItems dynamically*/}
        {props.items.map((item) => (
          <ToDoItem key={item.id} title={item.title} date={item.date} />
        ))}
      </Card>
    </div>
  );
};

export default ToDoList;
