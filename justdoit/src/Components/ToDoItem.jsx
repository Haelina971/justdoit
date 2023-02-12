import ProgressBar from 'react-bootstrap/ProgressBar';

function ToDoItem(props) {
    //Renders one ToDoItem
    //Use props from parent component ToDoList
    return (
        <div>
            <h2>{props.title}</h2>
            <ProgressBar animated striped variant="success" now={10} />
            <div>{props.beginDate.toISOString()}</div>
        </div>
    );
}

export default ToDoItem;