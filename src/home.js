import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import About from './Images/About.png';
import Match from './Images/Match.png';
import Talk from './Images/talk.png';
import CarouselComponent from './carouselComponent';
import FooterComponent from './footerComponent';



const HomeComponent = () => {

    return ( 
        <div>
            <CarouselComponent/>
            <Container className='container-fluid mt-3' fluid>
                <Row className='container-fluid'>
                    <Col> 
                        <div>
                            <h2 className='abt'> How it works </h2>
                        </div>
                    </Col>
                </Row>
                <Row className='container-fluid mt-2' fluid>
                    <Col xs ={12} md={2} lg={3} className='margin'> 
                        <div>
                        <Card>
                        <img src={About} alt='pictures'/>
                        <h5 className='txt'> Tell us about yourself </h5>
                        <p  className='parah'> Answer a few questionnaire about yourself, the issues you would like to deal with in therapy, this will help us match you with the most suitable therapist. Your answers will also give your therapist a good starting point in getting to know you.</p>
                        </Card>
                        </div>
                    </Col>
                    <Col xs ={12} md={2} lg={3} className='margin'> 
                        <div>
                        <Card>
                        <img src={Match} alt='pictures'/>
                        <p> </p>
                        <h5  className='txt'> Get matched to a Therapist </h5>
                        <p className='parah'> Our therapist are professionally licensed, spiritually informed and readily available. Pay a low flat fee for unlimited therapy with your therapist. Therapy doesn't have to be expensive. </p>
                        </Card>
                        </div>
                    </Col>
                    <Col xs ={12} md={2} lg={3} className='margin'> 
                        <div>
                        <Card>
                        <img src={Talk} alt='pictures'/>
                        <h5  className='txt'> Start talking </h5>
                        <p  className='parah'> Message whenever you want, scehdule sessions that work with your schedule. Therapist interacts with you over text, phone call or video. </p>
                        <p> </p>
                        <Button variant="success">Consult with a therapist</Button>{' '}
                        </Card>
                        </div>
                    </Col>
                </Row>
                
                
            </Container>
            <FooterComponent/>
        </div>
     );
}
 
export default HomeComponent;