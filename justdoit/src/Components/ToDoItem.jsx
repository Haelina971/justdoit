import ProgressBar from 'react-bootstrap/ProgressBar';
import ToDoDate from './ToDoDate';
import Card from 'react-bootstrap/Card';

function ToDoItem(props) {
    //Renders one ToDoItem
    //Use props from parent component ToDoList
    return (
        <Card className='d-flex flex-row align-items-center justify-content-between border-success border border-3 rounded-5 p-2 m-4'>
            <ToDoDate beginDate={props.beginDate}/>
            <h3>{props.title}</h3>
            {/*Add function to change progress
            when possibility to see detail about the ToDoItem
            (different steps needed to complete the task)*/}
            <ProgressBar animated striped variant="success" now={30} className="m-4 w-25" /> 
            
        </Card>
    );
}

export default ToDoItem;