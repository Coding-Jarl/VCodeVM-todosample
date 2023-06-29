import { test, expect, type Page } from '@playwright/test'

const TASKS: API.Task = [
  {
    id: 1,
    label: 'Create this app',
    status: 'done',
  },
  {
    id: 2,
    label: 'Enhance this app',
    status: 'todo',
  },
]

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/todo')
})

test.describe('The Todo page', () => {
  test('should have a title', async ({ page }) => {
    const newTodo = page.getByPlaceholder('What needs to be done?')
  })
})

test.describe('The Tasks list', () => {
  test('should have a title', async ({ page }) => {
    const newTodo = page.getByPlaceholder('What needs to be done?')
  })
})

test.describe('A Todo item', () => {
  test('should have a title', async ({ page }) => {
    const newTodo = page.getByPlaceholder('What needs to be done?')
  })
})
