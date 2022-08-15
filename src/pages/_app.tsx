// NEXT
import type { AppProps } from 'next/app'

// COMPONENTS
import { Header } from '../components/Header'

// STYLES
import { GlobalStyle } from '../styles/globals'
import '../styles/globals.ts'

// HOOKS
import AppProvider from '../hooks'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
