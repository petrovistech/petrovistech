import styles from './process-grid.module.css';

import Receiving from '@/assets/receiving.png';
import Fermentation from '@/assets/fermentation.png';
import Distillation from '@/assets/distillation.png';   
import Drying from '@/assets/drying.png';
import Markets from '@/assets/markets.png';
import Image from 'next/image';
const steps = [
  {
    step: 1,
    title: 'Receiving',
    description: 'Local farmers and suppliers deliver field corn to our plants by truck and rail.',
    image: Receiving.src,
  },
  {
    step: 2,
    title: 'Fermentation',
    description: 'Water, yeast, and enzymes are combined and heated to create corn mash, which ferments for over 48 hours producing ethanol and carbon dioxide.',
    image: Fermentation.src,
  },
  {
    step: 3,
    title: 'Distillation',
    description: 'The fermented mash is heated to separate the ethanol from the water and solids in distillation.',
    image: Distillation.src,
  },
  {
    step: 4,
    title: 'Drying',
    description: 'The non-fermentable solids are dried to produce the feed product – distillers grains.',
    image: Drying.src,
  },
  {
    step: 5,
    title: 'Markets',
    description: 'Ethanol is shipped by rail for gasoline blending, while distillers grains and corn oil are transported for livestock feed and renewable diesel.',
    image: Markets.src,
  },
];

export default function EthanolProcessSnapshot() {
  return (
     <section className={styles.container}>
      <h2 className={styles.heading}>Ethanol Process Snapshot</h2>
      <div className={styles.grid}>
        {steps.map((step, index) => (
          <div key={index} className={styles.gridItem}>
            <p className={styles.stepTitle}>Step {index + 1} - <span className={styles.title}>{step.title}</span></p>
           <div className={styles.imageWrapper}>
    <Image src={step.image} fill alt={step.title} />
  </div>
            <p className={styles.description}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
