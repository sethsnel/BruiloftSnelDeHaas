/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import useInviteType from '../hooks/useInviteType'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const { inviteType, resetInviteType } = useInviteType()
  const hrefInfo = inviteType === 'day' ? '/daggast' : '/avondgast'

  return (
    <div className={styles.container}>
      <Head>
        <title>Bruiloft Snel de Haas</title>
        <meta name='description' content='Bruiloft Snel de Haas' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.menuTitle}>Home</h1>
        <ul className={styles.menu}>
          <li>
            <Link href={`${hrefInfo}-rsvp`}>
              <a>RSVP</a>
            </Link>
          </li>
          <li>
            <Link href={hrefInfo}>
              <a>Informatie</a>
            </Link>
          </li>
          <li>
            <Link href='/cadeaus'>
              <a>Cadeautips</a>
            </Link>
          </li>
          <li>
            <Link href='/planning'>
              <a>{inviteType === 'day' ? 'Dagplanning' : 'Avondplanning'}</a>
            </Link>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a onClick={() => resetInviteType()}>Ik ben: {inviteType === 'day' ? 'Daggast' : 'Avondgast'}</a>
      </footer>
    </div>
  )
}

export default Home
