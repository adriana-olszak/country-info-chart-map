import React, { useState } from 'react'
import { AsyncCountriesSelect } from './AsyncCountriesSelect'
import { useAppDispatch } from '../../../../app/hooks'
import { fetchByPartialName } from '../../countries.slice'
import styles from './Search.module.css'

export const Search = () => {
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState('')

  const onCountrySelected = (newValue: string) => {
    setInputValue(newValue)
    dispatch(fetchByPartialName(newValue))
  }

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(fetchByPartialName(inputValue))
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input}>
        <AsyncCountriesSelect
          onOptionSelected={onCountrySelected}
          onInputChange={setInputValue}
          inputValue={inputValue}
        />
      </div>
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  )
}
