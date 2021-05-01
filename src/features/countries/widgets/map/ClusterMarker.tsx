import React from 'react'
import { Marker } from 'react-mapbox-gl'

const clusterMarkerStyles: React.CSSProperties = {
  width: 30,
  height: 30,
  borderRadius: '50%',
  backgroundColor: '#51D5A0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  border: '2px solid #56C498',
  cursor: 'pointer',
}

export interface IClusterParentProps {
  coordinates: GeoJSON.Position
  pointCount: number
  getLeaves: (limit?: number, offset?: number) => Array<React.ReactElement>
}

interface IProps extends IClusterParentProps {
  onClusterClick: (props: { coordinates: GeoJSON.Position; total: number; leaves: Array<React.ReactElement> }) => void
}

export const ClusterMarker: React.FC<IProps> = (props) => {
  const { coordinates, pointCount, getLeaves, onClusterClick } = props
  const clusterClick = () => {
    onClusterClick({
      coordinates,
      total: pointCount,
      leaves: getLeaves(),
    })
  }

  return (
    <Marker key={coordinates.toString()} coordinates={coordinates} style={clusterMarkerStyles} onClick={clusterClick}>
      <div>{pointCount}</div>
    </Marker>
  )
}
