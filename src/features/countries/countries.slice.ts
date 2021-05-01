import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import * as CountriesService from './countries.service'
import { Country } from './countries.types'

enum Status {
  idle = 'idle',
  loading = 'loading',
  failed = 'failed',
}

export interface CountriesState {
  data: Country[]
  status: Status
}

const initialState: CountriesState = {
  data: [],
  status: Status.idle,
}

export const fetchByRegion = createAsyncThunk('countries/fetchByRegion', async (regionName: string) => {
  const response = await CountriesService.fetchByRegion(regionName)
  return response.data
})

export const fetchByPartialName = createAsyncThunk('countries/fetchByPartialName', async (regionName: string) => {
  const response = await CountriesService.fetchByPartialName(regionName)
  return response.data
})

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchByRegion.pending, (state) => {
        state.status = Status.loading
      })
      .addCase(fetchByRegion.fulfilled, (state, action) => {
        state.status = Status.idle
        state.data = action.payload
      })
      .addCase(fetchByRegion.rejected, (state, action) => {
        state.status = Status.failed
      })
      .addCase(fetchByPartialName.pending, (state) => {
        state.status = Status.loading
      })
      .addCase(fetchByPartialName.fulfilled, (state, action) => {
        state.status = Status.idle
        state.data = action.payload
      })
      .addCase(fetchByPartialName.rejected, (state, action) => {
        state.status = Status.failed
      })
  },
})

export const selectCountries = (state: RootState) => state.countries.data

export const selectCountriesForChart = (state: RootState) =>
  state.countries.data
    .map((d) => ({
      name: d.name,
      ppl: d.population,
    }))
    .sort((a, b) => b.ppl - a.ppl)

export const selectCountriesForMap = (state: RootState) =>
  state.countries.data.map((d) => ({
    name: d.name,
    latlng: [...d.latlng].reverse(),
  }))

export const selectCountriesStatus = (state: RootState) => state.countries.status

export default countriesSlice.reducer
