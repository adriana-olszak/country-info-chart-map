import React from 'react'
import styles from './Tag.module.css'

export interface ITag {
  label: string
  value: string
}
interface IProps extends ITag {
  onClick: (value: string) => void
}

export const Tag: React.FC<IProps> = ({ value, label, onClick }) => (
  <button type="button" className={styles.tag} onClick={() => onClick(value)}>
    {label}
  </button>
)
