import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import getImagesFromFolder from './GetImages';
import 'bootstrap/dist/css/bootstrap.min.css';


const EventsCarousel = ({ eventFolder }) => {
    const images = getImagesFromFolder(eventFolder);

    return (
        <Carousel style={{ maxWidth: '800px', maxHeight: '800px'}}>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img src={require(`../../Images/Events/Fall2023/October2023/${eventFolder}/${image}`)} height='300'
                    width='400' alt={`Slide ${index + 1}`} />
                    <Carousel.Caption>
                        <h3>Slide {index + 1}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default EventsCarousel;
