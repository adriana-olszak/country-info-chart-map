import React from 'react'
import { Regions } from './widgets/regions/Regions'
import styles from './Countries.module.css'

export const CountriesPage: React.FC = () => (
  <div className={styles.page}>
    <div className={styles.ribbon}> Country Info - recruitment app</div>
    <div className={styles.dataControl}>
      <Regions />
    </div>
    <div className={styles.dataPresentation}>
      <div className={styles.chartPanel}>Show me some charts</div>
      <div className={styles.mapPanel}> Show me some maps</div>
    </div>
  </div>
)
