import React from 'react'
import { TagCloud } from '../../../../shared/components/TagCloud'
import { data } from './data'
import { useAppDispatch } from '../../../../app/hooks'
import { fetchByRegion } from '../../countries.slice'

export const Regions: React.FC = () => {
  const dispatch = useAppDispatch()

  const onClick = (value: string) => {
    dispatch(fetchByRegion(value))
  }

  return (
    <div>
      <TagCloud onClick={onClick} tags={data} />
    </div>
  )
}
