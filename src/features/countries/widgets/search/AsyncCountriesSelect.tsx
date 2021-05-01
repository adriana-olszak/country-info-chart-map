import React from 'react'
import AsyncSelect from 'react-select/async'
import axios from 'axios'
import { InputActionMeta } from 'react-select'

interface IProps {
  onOptionSelected: (value: string) => void
  onInputChange: (value: string) => void
  id: string
}

export const AsyncCountriesSelect: React.FC<IProps> = ({ onInputChange, onOptionSelected, id }) => {
  const url = (name: string) => `https://restcountries.eu/rest/v2/name/${name}?fields=name`

  const handleInputChange = (newValue: string, { action }: InputActionMeta) => {
    onInputChange(newValue.replace(/\W/g, ''))
    if (action === 'set-value') onOptionSelected(newValue)
  }

  const transformResult = (data: { name: string }[]) =>
    data.map((d) => ({
      value: d.name,
      label: d.name,
    }))

  const loadOptions = (value: string): Promise<Record<string, unknown>[]> =>
    new Promise((resolve, reject) => {
      axios
        .get<{ name: string }[]>(url(value), {})
        .then((result) => transformResult(result.data))
        .then(resolve)
        .catch((err) => {
          console.error(err)
          reject()
        })
    })

  return (
    <AsyncSelect
      id={id}
      isClearable
      cacheOptions={false}
      loadOptions={loadOptions}
      defaultOptions
      onInputChange={handleInputChange}
      placeholder="Country name"
    />
  )
}
