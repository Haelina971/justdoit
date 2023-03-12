import { useState } from "react";
import NewToDo from "../Todos/NewToDo";
import ToDoList from "../Todos/ToDoList";
import Card from "react-bootstrap/Card";
import supabase from "../Backend/supabase";

//Arrays of ToDoItems
const DUMMY_TODOS = [
    { title: "Learn React", date: new Date(2023, 2, 1), id:"01" },
    { title: "Build ToDo App", date: new Date(2023, 2, 10), id:"02" },
  ];

// async function fetchData() {
//     let { data: task, error } = await supabase
//       .from("todos")
//       .select("*");
//     console.log(task);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

const ToDos = () => {
  const [items, setItems] = useState(DUMMY_TODOS);

  //Add new ToDoItem
  const addToDoItemHandler = (item) => {
    setItems(prevItems => {
        return [item, ...prevItems];
    });
  };

  return (
    <Card className="w-75 mx-auto m-5 border-0 shadow-sm">
      <NewToDo onAddToDoItem={addToDoItemHandler} />
      <ToDoList items={items} />
    </Card>
  );
};

export default ToDos;
