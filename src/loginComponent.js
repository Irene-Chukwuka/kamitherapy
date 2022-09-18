import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import ImageFile from './Images/login.jpg';


const LoginComponent = () => {
    return (
            <Container className='container-fluid mt-3 background' fluid>
                <Row className='container-fluid'>
                    <Col xs ={12} md={4} lg={3}>
                    <div className='form1'>
                            <Form>
                                    <Form.Group className="mb-1 ml-5" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 ml-5" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="primary" className='butlog' type="submit">
                                        Login
                                    </Button>
                            </Form>
                        
                        </div>
                    </Col>                  
                </Row>
            </Container>

    );
}

export default LoginComponent;