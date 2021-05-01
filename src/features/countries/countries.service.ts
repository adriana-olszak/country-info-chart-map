import axios from 'axios'
import { Country } from './countries.types'

export const fetchByRegion = (regionName: string) =>
  axios.get<Country[]>(`https://restcountries.eu/rest/v2/region/${regionName}?filter=name,population,latlng`)

export const fetchByPartialName = (name: string) =>
  axios.get<Country[]>(`https://restcountries.eu/rest/v2/name/${name}?filter=name,population,latlng`)
