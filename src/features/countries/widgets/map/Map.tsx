import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ReactMapboxGl, { Cluster, Marker } from 'react-mapbox-gl'

import styles from './Map.module.css'
import { selectCountriesForMap } from '../../countries.slice'
import { markerStyles, mapStyle } from './mapbox.styles'
import { ClusterMarker } from './ClusterMarker'
import { MapPopup } from './MapPopup'

const MapBox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_KEY,
})

export interface IPopup {
  coordinates: GeoJSON.Position
  total: number
  leaves: Array<React.ReactElement>
}

export const Map: React.FC = () => {
  const [popup, setPopup] = useState<undefined | IPopup>(undefined)
  const data = useSelector(selectCountriesForMap)

  const closePopup = () => {
    setPopup(undefined)
  }

  return (
    <div className={styles.container}>
      <MapBox
        zoom={[1]}
        onMove={closePopup}
        onClick={closePopup}
        style="mapbox://styles/mapbox/outdoors-v10"
        containerStyle={mapStyle}
        renderChildrenInPortal={true}
      >
        <Cluster
          ClusterMarkerFactory={(
            coordinates: GeoJSON.Position,
            pointCount: number,
            getLeaves: (limit?: number, offset?: number) => Array<React.ReactElement>
          ) => (
            <ClusterMarker
              coordinates={coordinates}
              getLeaves={getLeaves}
              pointCount={pointCount}
              onClusterClick={setPopup}
            />
          )}
        >
          {data.map((country: { name: string; latlng: number[] }) => (
            <Marker key={country.name} style={markerStyles} coordinates={country.latlng} data-country={country}>
              <div title={country.name}>{country.name[0]}</div>
            </Marker>
          ))}
        </Cluster>
        {popup && <MapPopup {...popup} />}
      </MapBox>
    </div>
  )
}
