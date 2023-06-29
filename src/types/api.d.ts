declare global {
  namespace API {
    type Task = {
      id: string
      label: string
      status: 'done' | 'todo'
    }
  }
}
export {}
