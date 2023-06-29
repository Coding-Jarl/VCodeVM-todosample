'use client'
import clsx from 'clsx'
import styles from '@/styles/components/Task.module.scss'
import { useState } from 'react'

interface Props {
  data: API.Task
}
export default function Task({ data: { id, label, status } }: Props) {
  const [currStatus, setCurrStatus] = useState(status)

  const hClick = () => {
    console.log(`Clicked ${id}`)
    setCurrStatus(currStatus === 'done' ? 'todo' : 'done')
  }

  const cssClasses = clsx(styles.task, styles[currStatus])
  return (
    <li className={cssClasses}>
      <label>
        <input
          type="checkbox"
          checked={currStatus === 'done'}
          onChange={hClick}
        />
        {label}
      </label>
    </li>
  )
}
