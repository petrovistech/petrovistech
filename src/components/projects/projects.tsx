"use client";
import React, { useState } from 'react';
import styles from './projects.module.css';
import Image from 'next/image';
import Pro from '@/assets/pro.png';
import project1 from '@/assets/project1.png';
import project2 from '@/assets/project2.png';
import project3 from '@/assets/project3.png';
import { MoveLeft, MoveRight } from 'lucide-react';

const carouselData = [
  {
    image: project1,
    title: 'Assam',
    subtitle: 'Major ethanol plant using sugarcane by-products',
  },
  {
    image: project2,
    title: 'Mizoram',
    subtitle: 'First of its kind ethanol facility using maize waste',
  },
  {
    image: project3,
    title: 'Karnataka',
    subtitle: 'Advanced ethanol plant supporting both agriculture and industry',
  },
];

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselData.length);
  };

  return (
    <section className={styles.projectsSection} id='projects'>
      <div className={styles.leftPanel}>
        <div className={styles.imageContainer}>
          <Image src={Pro} alt="Project image" fill className={styles.image} />
          <div className={styles.overlay}>
            <h2 className={styles.overlayTitle}>Our Projects</h2>
            <h3 className={styles.projectsSubtitle}>
              Building Ethanol Plants Across <br />
              North East India and Karnataka
            </h3>
            <p className={styles.projectsDescription}>
              Petro Vistech is actively setting up ethanol 
              production units in <strong>Assam</strong>, <strong>Arunachal</strong>
              <strong>Pradesh</strong>, <strong>Manipur</strong>, <strong>Meghalaya</strong>, <strong>Mizoram</strong>, 
              <strong>Nagaland</strong>, <strong>Sikkim</strong>, <strong>Tripura</strong>, and <strong>Karnataka</strong>. 
              Each project leverages local resources, 
              empowering local economies and reducing 
              dependence on fossil fuels.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <h2 className={styles.featuredTitle}>Featured Projects</h2>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselText}>
              <span className={styles.carouselLocation}>{carouselData[activeIndex].title} :</span>
              <span className={styles.carouselSubtitle}> {carouselData[activeIndex].subtitle}</span>
            </div>
          <div className={styles.carouselImageWrapper}>
            <Image
              src={carouselData[activeIndex].image}
              alt="Project"
              className={styles.carouselImage}
            />
          </div>
           <div className={styles.carouselControls}>
            <button className={styles.arrowButton} onClick={handlePrev}><MoveLeft size={36} /></button>
           <div className={styles.carouselIndicators}>
            {carouselData.map((_, i) => (
              <div
                key={i}
                className={
                  i === activeIndex ? styles.activeIndicator : styles.indicator
                }
                onClick={() => setActiveIndex(i)}
              >
                {`0${i + 1}`}
              </div>
            ))}
          </div>
            <button className={styles.arrowButton} onClick={handleNext}><MoveRight size={36} /></button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
