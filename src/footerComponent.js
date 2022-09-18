import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormComponent from './formComponent';

const FooterComponent = () => {
    return ( 
        <footer className='footer'>
            <Row className='container-fluid mt-3'>
                <Col xs ={12} md={4} lg={3}> 
                    <div>
                        <h6> It's Professional </h6>
                        <p className='paraf'> All our therapist are licesensed accredited professionals. Anything you share with them is confidential.</p>
                    </div>
                </Col>
                <Col xs ={12} md={4} lg={3}> 
                    <div>
                        <h6> It's Convinient </h6>
                        <p className='paraf'> Do it at your own time and at your own pace. Communicate with your therapist as often as you want and whenever you feel it;s needed. </p> 
                    </div>
                </Col>
                <Col xs ={12} md={4} lg={3}> 
                    <div>
                        <h6> It's Effective </h6>
                        <p className='paraf'> Thousands of people have benefitted from our therapy. You can switch therapist if you feel you're not getting enough. Just check out our reviews. </p> 
                    </div>
                </Col>
                <Col xs ={12} md={4} lg={3}> 
                    <div>
                        <h6> Subscribe </h6>
                        <p className='paraf'> Will you love to receive tips from some of our counselors? Please subscribe.</p>
                        <FormComponent/>
                    </div>
                </Col>
                     
            </Row>
        </footer>    
     );
}
 
export default FooterComponent;