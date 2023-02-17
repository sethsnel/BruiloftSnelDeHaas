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

  if (inviteType === 'day') {
    push(`/${href}-rsvp`)
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Bruiloft Snel de Haas</title>
        <meta name='description' content='Bruiloft Snel de Haas' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.menuTitle}>Avondgast</h1>
        <ul className={styles.menu}>
          <li>
            <Link href="/">
              <AiOutlineRollback /> home
            </Link>
          </li>
        </ul>
        <div className='body'>
          <iframe className={rsvpStyles.form} src="https://docs.google.com/forms/d/e/1FAIpQLSep_cHGDyFWiT44O2T0Q4yHqcuwswWhMSdEQiGQR_XBjQVdSQ/viewform?embedded=true" width="380" height="500" frameBorder="0" marginHeight={0} marginWidth={0}>Laden…</iframe>
        </div>
      </main>
    </div>
  )
}

export default Home
