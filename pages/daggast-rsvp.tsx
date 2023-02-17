/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineRollback } from 'react-icons/ai'

import useInviteType from '../hooks/useInviteType'

import styles from '../styles/Home.module.scss'
import rsvpStyles from '../styles/rsvp.module.scss'

const Home: NextPage = () => {
  const { inviteType, href } = useInviteType()
  const { push } = useRouter()

  if (inviteType === 'evening') {
    push(`/${href}-rsvp`)
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Bruiloft Snel de Haas</title>
        <meta name='description' content='Bruiloft Snel de Haas' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.menuTitle}>Daggast</h1>
        <ul className={styles.menu}>
          <li>
            <Link href="/">
              <AiOutlineRollback /> home
            </Link>
          </li>
        </ul>
        <div className='body'>
          <iframe className={rsvpStyles.form} src="https://docs.google.com/forms/d/e/1FAIpQLScynk6Z9641Q3ZJ4KJ1-1v6PpnC4J1Swa3DtueKbkD04KYSCg/viewform?embedded=true" width="380" height="2106" frameBorder="0">Laden…</iframe>
        </div>
      </main>
    </div>
  )
}

export default Home
