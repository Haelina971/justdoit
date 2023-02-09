import ToDoItem from "./ToDoItem";

function ToDoList() {
    //Arrays of ToDoItems
    const items = [
        {title: "Learn React",
        beginDate: new Date(2023, 2, 1)
        },
        {title: "Build ToDo App",
        beginDate: new Date(2023, 2, 10)
        }
      ];

    //Renders different ToDoItems
    return (
        <div>
            <ToDoItem title={items[0].title} beginDate={items[0].beginDate}/>
            <ToDoItem title={items[1].title} beginDate={items[1].beginDate}/>
        </div>
    );
}

export default ToDoList;