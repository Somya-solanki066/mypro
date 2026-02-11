import './globals.css'

export const metadata = {
  title: 'Pratik Auth App',
  description: 'Authentication app with Next.js and Express',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

