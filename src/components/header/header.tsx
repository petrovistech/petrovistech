'use client';

import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>Petro Vistech</div>
      </div>

      <nav className={styles.center}>
        <Link href="#services" className={styles.navLink}>Our Services</Link>
        <Link href="#projects" className={styles.navLink}>Projects</Link>
        <Link href="#sustainability" className={styles.navLink}>Sustainability</Link>
        <Link href="#impact" className={styles.navLink}>Impact</Link>
      </nav>

      <div className={styles.right}>
        <button  onClick={() => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  }} className={styles.contactButton}>Contact Us</button>
      </div>
    </header>
  );
}
