import React, { useState } from 'react'
import { AsyncCountriesSelect } from './AsyncCountriesSelect'
import { useAppDispatch } from '../../../../app/hooks'
import { fetchByPartialName } from '../../countries.slice'
import styles from './Search.module.css'

export const Search = () => {
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState('')

  const onCountrySelected = () => {
    dispatch(fetchByPartialName(inputValue))
  }

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(fetchByPartialName(inputValue))
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={styles.label} htmlFor="countries-select">
        Search for a country
      </label>
      <div className={styles.input}>
        <AsyncCountriesSelect
          id="countries-select"
          onOptionSelected={onCountrySelected}
          onInputChange={setInputValue}
        />
      </div>
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  )
}
