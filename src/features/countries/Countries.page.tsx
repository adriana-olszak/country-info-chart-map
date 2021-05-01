import React from 'react'
import { Regions } from './widgets/regions/Regions'
import styles from './Countries.module.css'
import { Search } from './widgets/search/Search'
import { PopulationChart } from './widgets/plot/Chart'
import { Map } from './widgets/map/Map'

export const CountriesPage: React.FC = () => (
  <div className={styles.page}>
    <div className={styles.ribbon}> Country Info - recruitment app</div>
    <div className={styles.dataControl}>
      <Search />
      <Regions />
    </div>
    <div className={styles.dataPresentation}>
      <div className={styles.chartPanel}>
        <PopulationChart />
      </div>
      <div className={styles.mapPanel}>
        <Map />
      </div>
    </div>
  </div>
)
