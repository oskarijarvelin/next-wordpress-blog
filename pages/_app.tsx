import { AppProps } from 'next/app'
import '@fontsource/roboto-condensed/700.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
