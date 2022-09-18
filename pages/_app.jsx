import React from 'react'
import { ThemeProvider } from '../components/ThemeContext'
import '../styles/index.css'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp