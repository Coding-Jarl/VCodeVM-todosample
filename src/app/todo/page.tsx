'use client'
import Task from '@/components/Task'
import { useState, FormEvent, useRef } from 'react'

export default function Home() {
  const fieldRef = useRef<HTMLInputElement>(null)
  const [tasks, setTasks] = useState<Array<API.Task>>([])

  const hSubmit = (evt: FormEvent<HTMLFormElement>) => {
    // Skip default behaviour
    evt.preventDefault()

    // Push new task
    if (!fieldRef.current) return
    const newTask: API.Task = {
      id: '' + Math.random(),
      label: fieldRef.current.value,
      status: 'todo',
    }
    setTasks([...tasks, newTask])

    // Empty field
    fieldRef.current.value = ''
  }

  return (
    <main>
      <h1>Todo Page</h1>
      <form onSubmit={hSubmit}>
        <input ref={fieldRef} type="text" placeholder="What to do today..." />
      </form>
      <ul data-testid="tasks-list">
        {tasks.map((item: API.Task) => (
          <Task key={item.id} data={item} />
        ))}
      </ul>
    </main>
  )
}
