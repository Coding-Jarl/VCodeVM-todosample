import Task from '@/components/Task'

async function getData() {
  const res = await fetch('http://localhost:3000/api/todo')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (
    <main>
      <h1>Todo Page</h1>
      <ul>
        {data.map((item: API.Task) => (
          <Task key={item.id} data={item} />
        ))}
      </ul>
    </main>
  )
}
