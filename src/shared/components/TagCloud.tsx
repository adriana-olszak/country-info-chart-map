import React from 'react'
import { ITag, Tag } from './Tag'
import styles from './TagCloud.module.css'

interface IProps {
  tags: ITag[]
  onClick: (value: string) => void
}
export const TagCloud: React.FC<IProps> = ({ tags, onClick }) => (
  <div className={styles.tagCloud}>
    {tags.map((tag) => (
      <Tag key={tag.value} {...tag} onClick={onClick} />
    ))}
  </div>
)
