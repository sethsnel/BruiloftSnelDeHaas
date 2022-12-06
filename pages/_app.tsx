import type { AppProps } from 'next/app'
import Head from 'next/head'

import { BaseLayout } from '../components/layout'

import '../styles/globals.scss'
import '../styles/timeline.scss'
import styles from '../styles/Home.module.scss'
import appStyles from '../styles/App.module.scss'
import useInviteType from '../hooks/useInviteType'

function MyApp({ Component, pageProps }: AppProps) {
  const { inviteType, selectInviteType } = useInviteType()

  return <BaseLayout>
    <Head>
      {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" /> */}
      <link rel='icon' href='/favicon.ico' />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    {
      (inviteType) ?
        <Component {...pageProps} /> :
        (
          <div className={styles.container}>
            <main className={styles.main}>
              <div className={appStyles.inviteContainer}>
                <button onClick={() => selectInviteType('day')}>Daggast</button>
                <button onClick={() => selectInviteType('evening')}>Avondgast</button>
                {/* <button onClick={() => updateInviteType('church')}>Kerk/receptie</button> */}
              </div>
            </main>
          </div>
        )
    }
  </BaseLayout>
}

export default MyApp
