import Carousel from 'react-bootstrap/Carousel';
import slider1 from './Images/slider1.jpg'
import slider2 from './Images/slider2.jpg'
import slider3 from './Images/slider3.jpg'
import slider4 from './Images/slider4.jpg'

const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item className='sliderHeight'>
                <img
                    className="d-block w-100 imgHeight"
                    src='.Images/slider1.jpg'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='sliderHeight'>
                <img
                    className="d-block w-100 imgHeight"
                    src={slider2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='sliderHeight'>
                <img
                    className="d-block w-100 imgHeight"
                    src={slider3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='sliderHeight'>
                <img
                    className="d-block w-100 imgHeight"
                    src={slider4}
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            

        </Carousel>
    );
}

export default CarouselComponent;