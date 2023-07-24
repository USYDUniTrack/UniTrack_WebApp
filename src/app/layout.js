import './globals.css'
import Header from './Header';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UniTrack',
  description: 'Track your degree',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{margin: 0}}>

        <div className="ContentDiv">
          <div className="Header">
              <Header/>
          </div>
          <div className='PageContent'>
              {children}
          </div>
        </div>
      </body>
    </html>
  )
}
