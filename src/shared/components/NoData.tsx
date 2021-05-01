import React from 'react'
import EmptyNote from '../../assets/note.png'
import styles from './NoData.module.css'

interface IProps {
  text: string
}

export const NoData: React.FC<IProps> = ({ text }) => (
  <div className={styles.noData}>
    <img className={styles.icon} src={EmptyNote} alt="No data visible" />
    <p className={styles.text}>{text}</p>
  </div>
)
