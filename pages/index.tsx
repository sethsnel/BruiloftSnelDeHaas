/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import useInviteType from '../hooks/useInviteType'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const { inviteType, href } = useInviteType()

  return (
    <div className={styles.container}>
      <Head>
        <title>Bruiloft Snel de Haas</title>
        <meta name='description' content='Bruiloft Snel de Haas' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.menuTitle}>Home</h1>
        <p>Bedankt lieve mensen voor jullie bijdrage aan onze bruiloft!</p>
        <p><a href="http://www.gerbenpul.nl/album/preview-seth-en-annemijn">Klik hier</a> voor een preview van de foto's.</p>
        <p> Met denk aan <a href="https://www.gerbenpul.nl" target="blank">Gerben Pul fotografie</a></p>
        {/* <ul className={styles.menu}>
          <li>
            <Link href={`/${href}-rsvp`}>
              RSVP
            </Link>
          </li>
          <li>
            <Link href={`/${href}`}>
              Informatie
            </Link>
          </li>
          {/* <li>
            <Link href='/cadeaus'>
              Cadeautips
            </Link>
          </li> /}
          <li>
            <Link href='/planning'>
              Planning
            </Link>
          </li>
        </ul> */}
      </main>
    </div>
  )
}

export default Home
