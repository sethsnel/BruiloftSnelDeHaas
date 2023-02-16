import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { BaseLayout } from '../components/layout'

import '../styles/globals.scss'
import '../styles/timeline.scss'
import styles from '../styles/Home.module.scss'
import appStyles from '../styles/App.module.scss'
import { InviteContext, inviteType } from '../hooks/useInviteType'

function MyApp({ Component, pageProps }: AppProps) {
  const [inviteType, setInviteType] = useState<inviteType>('')

  const selectInviteType = (newType: inviteType) => {
    localStorage.setItem('inviteType', newType ?? '')
    setInviteType(newType)
  }

  return <InviteContext.Provider value={inviteType}>
    <BaseLayout selectInviteType={selectInviteType}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel='icon' href='/favicon.ico' />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {
        (inviteType !== '') ?
          <Component {...pageProps} /> :
          (
            <div className={styles.container}>
              <main className={styles.main}>
                <h1 className={styles.menuTitle}>Welkom</h1>
                <div className={appStyles.inviteContainer}>
                  <InvitePicker selectInviteType={selectInviteType} />
                  {/* <button onClick={() => updateInviteType('church')}>Kerk/receptie</button> */}
                </div>
              </main>
            </div>
          )
      }
    </BaseLayout>
  </InviteContext.Provider>
}

function InvitePicker({ selectInviteType }: { selectInviteType: (type: inviteType) => void }) {
  useEffect(() => {
    selectInviteType(typeof localStorage !== 'undefined' ? localStorage?.getItem('inviteType') as inviteType : '')
  }, [selectInviteType])

  return <>
    <button onClick={() => selectInviteType('day')}>Daggast</button>
    <button onClick={() => selectInviteType('evening')}>Avondgast</button>
  </>
}

export default MyApp
