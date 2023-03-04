import ToDoItem from "./ToDoItem";
import Card from "react-bootstrap/Card";

const ToDoList = (props) => {
  //Renders different ToDoItems
  return (
    <div>
      <Card className="w-75 mx-auto m-5 border-0 shadow-sm">
        {/* Render list of ToDoItems dynamically*/}
        {props.items.map(item => <ToDoItem 
        key={item.id}
        title={item.title}
        date={item.date}/>)}
      </Card>
    </div>
  );
};

export default ToDoList;
