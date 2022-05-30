import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { BaseLayout } from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <BaseLayout dividerText="menu">
    <Component {...pageProps} />
  </BaseLayout>
}

export default MyApp
