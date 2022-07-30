import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from '../src/components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return(<>
    <Component {...pageProps} />
    <Navbar></Navbar>
  </>)
}

export default MyApp
