import React from 'react'
import { Regions } from './widgets/regions/Regions'

interface IProps {}
export const CountriesPage: React.FC<IProps> = () => (
  <div>
    Country Info
    <hr />
    <Regions />
  </div>
)
