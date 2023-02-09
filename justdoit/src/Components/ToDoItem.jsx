function ToDoItem(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <progress></progress>
            <div>{props.beginDate.toISOString()}</div>
        </div>
    );
}

export default ToDoItem;