import React from 'react'
import AsyncSelect from 'react-select/async'
import axios from 'axios'
import type { ActionMeta, ValueType, InputActionMeta } from 'react-select/src/types'

interface IProps {
  onOptionSelected: (value: string) => void
  onInputChange: (value: string) => void
  id: string
  inputValue: string
}

interface IOptionValue {
  label: string
  value: string
}

export const AsyncCountriesSelect: React.FC<IProps> = ({ onInputChange, onOptionSelected, id, inputValue }) => {
  const url = (name: string) => `https://restcountries.eu/rest/v2/name/${name}?fields=name`

  const handleInputChange = (newValue: string, { action }: InputActionMeta) => {
    if (action === 'input-change') onInputChange(newValue)
  }

  const handleOptionSelection = (newValue: ValueType<IOptionValue, false>, { action }: ActionMeta<IOptionValue>) => {
    switch (action) {
      case 'select-option':
        onOptionSelected(newValue?.value || '')
        return
      case 'clear':
        onInputChange(newValue?.value || '')
    }
  }

  const transformResult = (data: { name: string }[]) =>
    data.map((d) => ({
      value: d.name,
      label: d.name,
    }))

  const loadOptions = (value: string): Promise<IOptionValue[]> =>
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
    <AsyncSelect<IOptionValue>
      id={id}
      isClearable
      autoFocus
      inputValue={inputValue}
      cacheOptions={true}
      loadOptions={loadOptions}
      onChange={handleOptionSelection}
      onInputChange={handleInputChange}
      tabSelectsValue={false}
      placeholder="Country name"
      classNamePrefix="country"
    />
  )
}
