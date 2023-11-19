import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CommitteeImages from './CommitteeImages.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CommitteesCarousel.css'; // Add this import

const CommitteesCarousel = ({ committeefolder }, {committee}, {bios}) => {
    const images = CommitteeImages(committeefolder);

    return (
        <Carousel className="custom-carousel">
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <div className="custom-image-container">
                        <img
                            src={require(`../../Images/CommitteeImages/Fall2023/${committeefolder}/${image}`)}
                            alt={`Slide ${index + 1}`}
                            className="custom-image"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Slide {index + 1}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
            <Button
          variant="outline-dark"
          onClick={() => setOpen(!open)}
          aria-controls={`example-collapse-text-${id}`}
          aria-expanded={open}
        >
          {committee}
        </Button>
        <Collapse in={open}>
          <div id={`example-collapse-text-${id}`}>
            {bios}
          </div>
        </Collapse>
        </Carousel>
        
    );
};

export default CommitteesCarousel;