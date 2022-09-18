import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const FormComponent = () => {
    return (
        <Form>
            <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                
            </Form.Group>         
            <Button className='btnsub' type="submit">
                Subscribe
            </Button>
        </Form>
    );
}

export default FormComponent;