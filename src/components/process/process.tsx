import React from 'react';
import styles from './process.module.css';
import EthanolProcessSnapshot from './process-grid/process-grid';

const processData = [
  {
    title: 'Ethanol',
    description:
      'A clean-burning, high-octane renewable fuel that is blended with gasoline.',
  },
  {
    title: 'Distillers Grains',
    description:
      'Dried and modified (wet) co-products from the fermentation of sugars (starch) in the corn during the distillation process. They consist of protein, fats, fiber and other solids sold as valuable livestock feed.',
  },
  {
    title: 'Fuel- and Feed-Grade Oil',
    description:
      'This inedible oil is extracted during the evaporation process of making ethanol. It is used to make renewable diesel fuel and livestock feed.',
  },
];

export default function ProcessSection() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        {processData.map(({ title, description }, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
          </div>
        ))}
      </div>
      <EthanolProcessSnapshot/>
    </section>
  );
}
