import ToDoItem from "./ToDoItem";
import Card from 'react-bootstrap/Card';

function ToDoList() {
    //Arrays of ToDoItems
    const items = [
        {title: "Learn React",
        date: new Date(2023, 2, 1)
        },
        {title: "Build ToDo App",
        date: new Date(2023, 2, 10)
        }
      ];

    //Renders different ToDoItems
    return (
        <Card className="w-50 mx-auto m-5 border-0">
            <ToDoItem title={items[0].title} date={items[0].date}/>
            <ToDoItem title={items[1].title} date={items[1].date}/>
        </Card>
    );
}

export default ToDoList;