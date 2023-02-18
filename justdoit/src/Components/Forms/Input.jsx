import Form from 'react-bootstrap/Form';

const Input = (props) => {
  return (
    <Form.Group controlId={props.controlID} className="my-3">
      <Form.Label>{props.name}</Form.Label>
      <Form.Control type={props.type} placeholder={props.placeholder} size={props.size} />
    </Form.Group>
  );
};

export default Input;
