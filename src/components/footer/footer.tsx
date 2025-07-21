// components/Footer.tsx
"use client";
import Link from 'next/link';
import styles from './footer.module.css';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
      const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.whiteContainer}>
        <div className={styles.leftSection}>
          <h2 className={styles.brand}>Petro Vistech</h2>
          <p className={styles.tagline}>Clean Energy for a<br />Greener Tomorrow</p>
        </div>

        <div className={styles.linksSection}>
          <h3 className={styles.linksHeader}>Quick Links</h3>
          <Link href="#about" className={styles.link}>About Us</Link>
          <Link  href="#projects" className={styles.link}>Our Services</Link>
          <Link href="#projects" className={styles.link}>Our Projects</Link>
        </div>

        <div className={styles.topButton}>
          <button
            aria-label="Go to Top"
            onClick={scrollToTop}
          >
            <ChevronUp size={32} color="#0D1E1E" />
          </button>
        </div>
      </div>

      <div className={styles.greenPart}>
        © Copyrights 2025. All rights reserved.
      </div>
    </footer>
  );
}
