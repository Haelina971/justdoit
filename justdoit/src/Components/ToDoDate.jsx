import Card from 'react-bootstrap/Card';

function ToDoDate(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <Card className='m-4 p-4 d-inline-block text-center border-success border border-2 rounded-5'>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </Card>
    );
}

export default ToDoDate;