import Card from 'react-bootstrap/Card';

function ToDoDate(props) {
    const month = props.beginDate.toLocaleString('en-US', {month: 'long'});
    const day = props.beginDate.toLocaleString('en-US', {day: '2-digit'});
    const year = props.beginDate.getFullYear();
    return (
        <Card className='m-4 p-4 d-inline-block text-center border-success border border-2 rounded-5'>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </Card>
    );
}

export default ToDoDate;