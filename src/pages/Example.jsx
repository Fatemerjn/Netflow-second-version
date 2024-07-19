import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Example.scss';

// ... rest of your component


const initialImages = [
  '../../public/Rectangle 94.jpg',
  '../../public/Rectangle 95.jpg',
  '../../public/Rectangle 80.jpg',
  '../../public/Rectangle 96.jpg',
  '../../public/Rectangle 97.jpg',
];

function Example() {
  const [images, setImages] = useState(initialImages);
  const [activeIndex, setActiveIndex] = useState(2); // Start with the third image active

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setImages(prevImages => [prevImages[prevImages.length - 1], ...prevImages.slice(0, -1)]);
    } else { // 'right'
      setImages(prevImages => [...prevImages.slice(1), prevImages[0]]);
    }
  };

  const handleClick = (clickedIndex) => {
    let newImages = [...images];
    const middleIndex = 2;
    const rotateBy = clickedIndex - middleIndex;

    if (rotateBy > 0) {
      // Rotate array to the left
      newImages = newImages.slice(rotateBy).concat(newImages.slice(0, rotateBy));
    } else if (rotateBy < 0) {
      // Rotate array to the right
      const length = newImages.length;
      newImages = newImages.slice(length + rotateBy).concat(newImages.slice(0, length + rotateBy));
    }

    setImages(newImages);
  };


  const imageStyles = (index) => {
    const overlap = 0.3; // 30% overlap
    const imageWidth = 15; // Adjusted image width
    let leftOffset = index * imageWidth;

    // Adjust for overlap
    if (index > 0) {
      leftOffset -= overlap * imageWidth * index;
    }

    let zIndex = 1; // Default zIndex
    let scale = 0.8; // Default scale

    if (index === activeIndex) {
      zIndex = 5;
      scale = 1;
    } else if (index === 1 || index === 3) {
      zIndex = 4; // Higher zIndex for second and fourth images
      scale = 0.9;
    } else if (index === 4) {
      zIndex = 3; // Lower zIndex for the fifth image
    }

    return {
      left: `${leftOffset}%`,
      zIndex,
      opacity: 1,
      transform: `scale(${scale})`,
      position: 'absolute',
      transition: 'left 0.5s ease, transform 0.5s ease' // Smooth transition for left and transform
    };
  };


  return (
    <div className="carousel-container">
      <div className="arrow left-arrow" onClick={() => handleArrowClick('left')}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="carousel">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Slide ${index}`}
            className="slide"
            onClick={() => handleClick(index)}
            style={imageStyles(index)}
          />
        ))}
      </div>
      <div className="arrow right-arrow" onClick={() => handleArrowClick('right')}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
  
}

export default Example;
