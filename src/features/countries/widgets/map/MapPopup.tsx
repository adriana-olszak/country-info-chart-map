import React from 'react'
import { Popup } from 'react-mapbox-gl'
import styles from './Map.module.css'
import type { IPopup } from './Map'

export const MapPopup: React.FC<IPopup> = ({ coordinates, leaves, total }) => {
  const a = ''
  return (
    <Popup offset={[0, -50]} coordinates={coordinates}>
      <div className={styles.popup}>
        {leaves.map((leaf) => {
          const leafName = leaf.props['data-country'].name
          return <div key={leafName}>{leafName}</div>
        })}
        {total > leaves.length ? <div>And more...</div> : null}
      </div>
    </Popup>
  )
}
