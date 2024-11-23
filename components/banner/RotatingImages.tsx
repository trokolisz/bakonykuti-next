'use client';

import { useEffect, useCallback, useState } from 'react';
import { BackgroundImage } from './BackgroundImage';

const images = [
    '/bg.jpg',
    '/bg2.jpg',
    '/bg3.jpg',
    '/bg4.jpg',
];


export function RotatingImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const rotateImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(rotateImage, 5000);
    return () => clearInterval(interval);
  }, [rotateImage]);

  return (
    <>
      {images.map((src, index) => (
        <BackgroundImage
          key={index}
          src={src}
          isActive={index === currentImageIndex}
          index={index}
        />
      ))}
    </>
  );
}
