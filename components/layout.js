import '../pages/styles/globals.css';
import Head from './head';

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head/>
      <body>{children}</body>
    </html>
  )
}
