'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './hero.module.css';
import CarouselImg1 from '@/assets/carousel-one.jpg';
import CarouselImg2 from '@/assets/carousel-two.jpg';

const slides = [
  {
    image: CarouselImg1,
    title: <>
      <span className={styles.highlight}>Petro Vistech</span> - Pioneering Ethanol Production
    </>,
    description: 'Transforming renewable resources into sustainable fuel solutions. Join us in building a greener future through ethanol.',
    descriptionStyle: '', // white
    buttonText: 'Contact Us',
  },
  {
    image: CarouselImg2,
    title: <>Welcome to Petro Vistech</>,
    description: 'Revolutionizing Warehousing and Cold Storage Solutions Across India',
    descriptionStyle: 'green',
    buttonText: 'Explore Us',
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);
const startXRef = useRef<number | null>(null);
  const threshold = 50; // min px to count as swipe
  // Optional auto-switch every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    if (startXRef.current !== null) {
      const delta = endX - startXRef.current;
      if (delta > threshold) {
        setIndex(prev => (prev - 1 + slides.length) % slides.length); // swipe right
      } else if (delta < -threshold) {
        setIndex(prev => (prev + 1) % slides.length); // swipe left
      }
    }
    startXRef.current = null;
  };


  return (
    <div className={styles.hero}  onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>
      {slides.map((slide, i) => (
  <div
    key={i}
    className={`${styles.slide} ${i === index ? styles.active : ''}`}
    style={{ backgroundImage: `url(${slide.image.src})` }}
  >
    {i === index && (
      <div className={styles.overlayWrapper}>
        <div className={styles.overlayBackground}></div>
        <div className={styles.overlayContent}>
          <h1 className={styles.title}>{slide.title}</h1>
          <p className={`${styles.description} ${slide.descriptionStyle && styles[slide.descriptionStyle]}`}>
            {slide.description}
          </p>
          <button onClick={() => {
    if (slide.buttonText === 'Contact Us') {
      const el = document.getElementById('contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Optionally handle other buttons
      console.log('Explore Us clicked');
    }
  }} className={styles.button}>{slide.buttonText}</button>
        </div>
      </div>
    )}
  </div>
))}


      <div className={styles.indicators}>
        {slides.map((_, i) => (
          <div key={i} className={`${styles.dot} ${i === index ? styles.active : ''}`} />
        ))}
      </div>
    </div>
  );
}
