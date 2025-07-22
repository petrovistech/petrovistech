// components/AboutSection.tsx
import styles from './sustain.module.css';
import ZeroWaste from '@/assets/zero-waste.svg';
import LocalAgri from '@/assets/local-agri.svg';
import Carbon from '@/assets/carbon.svg';
import Ethanol from '@/assets/ethanol.svg';


const stats = [{
  title: "1 Million +",
  subtitle: "Liters of Ethanol Produced",
}, {title: "10,000+", subtitle: "Jobs Created"},
{title: "80%", subtitle: "Reduction in Carbon Emissions per Project"},
{title: "100%", subtitle: "Zero-Waste Facilities"}];

export default function SustainSection() {
  return (
    <section className={styles.aboutSection} id='sustainability'>
      <div className={styles.top}>
        <div className={styles.col1}>
          <h2 className={styles.heading}>Sustainability: Leading the Way in Green Energy</h2>
        </div>
        <div className={styles.col2}>
          <p className={styles.lead}>
            A Cleaner, More 
Sustainable Future
          </p>
        </div>
        <div className={styles.col3}>
          <p className={styles.desc}>
            Ethanol is a clean-burning fuel that significantly reduces
greenhouse gas emissions. At Petro Vistech, our 
commitment sustainability ensures that every project 
aligns with environmental goals while benefiting the local 
community. </p>
    <div className={styles.iconRow}>
            <div className={styles.iconItem}>
              <ZeroWaste className={styles.iconItemImg} />
              <span>Zero-Waste Processing</span>
            </div>
            <div className={styles.iconItem}>
              <LocalAgri className={styles.iconItemImg}/>
              <span>Local Agricultural Integration</span>
            </div>
            <div className={styles.iconItem}>
              <Carbon className={styles.iconItemImg}/>
              <span>Reduced Carbon Footprint</span>
            </div>
            <div className={styles.iconItem}>
              <Ethanol className={styles.iconItemImg}/>
              <span>No Water Footprint in Ethanol 
Production</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.top2}>
        <div className={styles.col1}>
          <h2 className={styles.heading} id='impact'>Impact : Driving 
Positive Change</h2>
        </div>
        <div className={styles.col2}>
          <p className={styles.lead}>
            Empowering
Communities, 
Supporting Growth
          </p>
        </div>
        <div className={styles.col3}>
          <p className={styles.desc}>
            By setting up ethanol plants, we&apos;re creating jobs, 
supporting local agriculture, and reducing environmental 
impacts. Our projects are not just about energy they&apos;re 
about community development and long-term 
sustainability.</p>
        </div>
      </div>

      <h3 className={styles.impactStats}>Impact Statistics (Visualized as Numbers)</h3>
      <div className={styles.statsRow}>
  {stats.map(({ title, subtitle }, i) => (
    <div className={styles.statItem} key={i}>
      <div className={styles.statTitle}>{title}</div>
      <div className={styles.statSubtitle}>{subtitle}</div>
    </div>
  ))}
</div>
    </section>
  );
}
