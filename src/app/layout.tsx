import '@/styles/app.scss'

export const metadata = {
  title: 'My first Todo!',
  description: 'Eeyup, one more todo app, I **know** -_-',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <p>Global Layout</p>
        <nav>
          <ul>
            <li>Home</li>
          </ul>
          <ul>
            <li>Todo</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
