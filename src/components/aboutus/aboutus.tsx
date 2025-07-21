// components/AboutSection.tsx
import Image from 'next/image';
import styles from './aboutus.module.css';
import Etanol from '@/assets/ethanol.png';
import Sustainable from '@/assets/sustainable.png';
import Turnkey from '@/assets/turnkey.png';
import Positive from '@/assets/positive.png';

const highlights = [
  {
    src: Etanol.src,
    text: 'Expertise in Ethanol Factory Setup',
  },
  {
    src: Sustainable.src,
    text: 'Sustainable and Compliant Operations',
  },
  {
    src: Turnkey.src,
    text: 'Turnkey Project Management',
  },
  {
    src: Positive.src,
    text: 'Positive Economic Impact on Local Communities',
  },
];

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id='about'>
      <div className={styles.top}>
        <div className={styles.col1}>
          <h2 className={styles.heading}>About Us</h2>
        </div>
        <div className={styles.col2}>
          <p className={styles.lead}>
            Leading the Change<br />
            in Sustainable Energy<br />
            Solutions
          </p>
        </div>
        <div className={styles.col3}>
          <p className={styles.desc}>
            At <strong>Petro Vistech</strong>, we are dedicated to delivering advanced ethanol
            projects that support India’s growing clean energy needs. With a focus on <strong>North East India</strong> and <strong>Karnataka</strong>, we build world-class ethanol production facilities that convert agricultural by-products into renewable fuel sources. Our mission is to reduce carbon footprints, support local economies, and contribute to the national goal of energy independence.
          </p>
        </div>
      </div>

      <div className={styles.highlights}>
        {highlights.map(({ src, text }, idx) => (
          <div key={idx} className={styles.highlightItem}>
            <Image src={src} alt={text} width={300} height={200} className={styles.image} />
            <p className={styles.highlightText}>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
