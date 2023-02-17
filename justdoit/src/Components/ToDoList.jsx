import ToDoItem from "./ToDoItem";

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
        <div>
            <ToDoItem title={items[0].title} date={items[0].date}/>
            <ToDoItem title={items[1].title} date={items[1].date}/>
        </div>
    );
}

export default ToDoList;