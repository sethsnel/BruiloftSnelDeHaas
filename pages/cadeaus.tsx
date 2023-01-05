/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { AiOutlineRollback } from 'react-icons/ai'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bruiloft Snel de Haas</title>
        <meta name='description' content='Bruiloft Snel de Haas' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.menuTitle}>Cadeaus</h1>
        <ul className={styles.menu}>
          <li>
            <Link href="/">
              <AiOutlineRollback /> home
            </Link>
          </li>
        </ul>
        <div className='body'>
          <p>Bekijk ons verlanglijstje op <a href="https://www.lijstje.nl/sneldehaas" target="_blank" rel="noreferrer">lijstje.nl/sneldehaas</a></p>
        </div>
      </main>
    </div>
  )
}

export default Home
