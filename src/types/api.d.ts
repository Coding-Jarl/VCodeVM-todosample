declare global {
  namespace API {
    type Task = {
      id: number
      label: string
      status: 'done' | 'todo'
    }
  }
}
export {}
