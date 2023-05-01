import React, { useState, useEffect } from 'react';
import '../static/css/Carousel.css'
import '../static/css/css-gg.css'
import Img from '../static/images/yi1.jpg'
import Img2 from '../static/images/yi2.jpg'
import Img3 from '../static/images/yi3.jpg'
import Img4 from '../static/images/yi4.jpg'
import Img5 from '../static/images/yi5.jpg'

function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        Img,
        Img2,
        Img3,
        Img4,
        Img5
    ];

    const scrollInterval = 3000; // scroll every 3 seconds

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, scrollInterval);
        return () => clearInterval(intervalId);
    }, [currentIndex, images.length]);

    const handlePrevClick = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="carousel">
            <div className='carousel-container'>
                <button className='left-arrow' onClick={handlePrevClick} aria-label='Press this button to see previous pics'><i className='gg-chevron-left'></i></button>
                <img className='carousel-img' src={images[currentIndex]} aria-label='Carousel Picture' alt={`Land Scape ${currentIndex}`} />
                <button className='right-arrow' onClick={handleNextClick} aria-label='Press this button to see post pics'><i className='gg-chevron-right'></i></button>
            </div>
        </div>
    );
};
export default Carousel;