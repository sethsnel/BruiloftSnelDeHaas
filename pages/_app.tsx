import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import { BaseLayout } from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <BaseLayout>
    <Component {...pageProps} />
  </BaseLayout>
}

export default MyApp
