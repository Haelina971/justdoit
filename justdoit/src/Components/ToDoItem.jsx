import ProgressBar from 'react-bootstrap/ProgressBar';
import ToDoDate from './ToDoDate';

function ToDoItem(props) {
    //Renders one ToDoItem
    //Use props from parent component ToDoList
    return (
        <div>
            <h2>{props.title}</h2>
            {/*Add function to change progress
            when possibility to see detail about the ToDoItem
            (different steps needed to complete the task)*/}
            <ProgressBar animated striped variant="success" now={10} /> 
            <ToDoDate beginDate={props.beginDate}/>
        </div>
    );
}

export default ToDoItem;