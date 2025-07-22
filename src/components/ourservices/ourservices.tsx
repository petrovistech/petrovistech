// components/AboutSection.tsx
import styles from './ourservices.module.css';
import CheckCircle from '@/assets/check.svg';


export default function OurServices() {

  return (
    <section className={styles.aboutSection} id='services'>
      <div className={styles.top}>
        <div className={styles.col1}>
          <h2 className={styles.heading}>Our Services</h2>
        </div>
        <div className={styles.col2}>
          <p className={styles.lead}>
            Innovative Solutions<br />
for Ethanol Production
          </p>
        </div>
        <div className={styles.col3}>
          <p className={styles.desc}>
            From concept to commissioning, Petro Vistech provides 
end-to-end solutions for ethanol factory setups. 
Our services are designed to ensure maximum output, 
efficiency, and sustainability for every project we
undertake.</p>
        </div>
      </div>

<div className={styles.serviceBoxes}>
  <div className={styles.serviceBox}>
    <h3 className={styles.serviceTitle}>Turnkey Ethanol Factory Setup</h3>
    <ul className={styles.serviceList}>
      <li className={styles.serviceItem}>
       
<CheckCircle className={styles.serviceItemIcon} />
        <span className={styles.content}>We manage all aspects of building ethanol production facilities.</span>
      </li>
      <li className={styles.serviceItem}>
        
<CheckCircle className={styles.serviceItemIcon} />
        <span className={styles.content}>Our services include selecting suitable locations for the facilities.</span>
      </li>
      <li className={styles.serviceItem}>
        
<CheckCircle className={styles.serviceItemIcon} />
        <span className={styles.content}>We focus on integrating the necessary technologies into the production process.</span>
      </li>
    </ul>
  </div>

  <div className={styles.serviceBox}>
    <h3 className={styles.serviceTitle}>Project Design and Development</h3>
    <ul className={styles.serviceList}>
      <li className={styles.serviceItem}>
        
<CheckCircle className={styles.serviceItemIcon} />
        <span className={styles.content}>We create projects specifically designed to meet the unique needs of different regions.</span>
      </li>
      <li className={styles.serviceItem}>
        
<CheckCircle className={styles.serviceItemIcon} />
        <span className={styles.content}>Our approach emphasizes utilizing local agricultural inputs.</span>
      </li>
      <li className={styles.serviceItem}>
        
<CheckCircle className={styles.serviceItemIcon} />
        <span className={styles.content}>We adapt our projects to fit the specific resources available in each area we serve.</span>
      </li>
    </ul>
  </div>

  <div className={styles.serviceBox}>
    <h3 className={styles.serviceTitle}>Compliance and Sustainability</h3>
    <ul className={styles.serviceList}>
      <li className={styles.serviceItem}>
        
<CheckCircle className={styles.serviceItemIcon} />
        <span className={styles.content}>All projects are designed to meet local and international environmental standards.</span>
      </li>
      <li className={styles.serviceItem}>
        
<CheckCircle className={styles.serviceItemIcon} />
        <span className={styles.content}>We implement processes aimed at achieving zero waste.</span>
      </li>
      <li className={styles.serviceItem}>
        
<CheckCircle className={styles.serviceItemIcon} />
        <span className={styles.content}>Our projects focus on reducing emissions to the lowest possible levels.</span>
      </li>
    </ul>
  </div>
</div>

     
    </section>
  );
}
