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
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.menuTitle}>Daggast</h1>
        <ul className={styles.menu}>
          <li>
            <Link href="/">
              <a><AiOutlineRollback /> home</a>
            </Link>
          </li>
        </ul>
        <div className='body'>
          <h2>
            Stukjes
          </h2>
          <p>
            Wil je op de dag zelf een leuke bijdrage leveren? Laat het ons dan weten
            vóór 9 mei in verband met de beperkte ruimte in de planning van de dag.
            Houdt er ook rekening mee dat er in principe geen beamer beschikbaar is.
          </p>
          <h2>
            Kleding
          </h2>
          <p>
            Een gedeelte van de dag vindt buiten plaats, zorg dus voor passende kleding
            bij het weer. Het bruidspaar vindt het daarnaast leuk als je feestelijke
            kleding aandoet.
          </p>
          <h2>
            Cadeau
          </h2>
          <p>
            Mocht je een cadeau willen geven en zoek je nog inspiratie? Cadeautip: ✉
          </p>
          <p>
            Vind je het leuker om een fysiek cadeau te geven, dan kun je op
            sneldehaas.nl een verlanglijstje van het bruidspaar vinden.
          </p>
          <h2>
            Foto’s en filmpjes
          </h2>
          <p>
            Het bruidspaar wil alle gasten vragen om niet zelf foto’s of filmpjes te
            maken. Er zal een fotograaf aanwezig zijn die de dag van begin tot eind
            vast zal leggen.
          </p>
          <h2>
            Tot slot
          </h2>
          <p>
            We hopen natuurlijk dat je erbij bent op deze prachtige dag. Mocht je
            echter niet aanwezig kunnen zijn, wil je dit dan zo snel mogelijk, maar
            uiterlijk voor 1 mei laten weten op <a>bruidspaar@sneldehaas.nl</a>. Ook
            als je een deel van het programma moet missen, is het fijn als je dit
            doorgeeft.
          </p>
          <h2>
            Contact
          </h2>
          <p dir="ltr">
            Seth en Annemijn:
            <a href="mailto:bruidspaar@sneldehaas.nl">
              bruidspaar@sneldehaas.nl
            </a>
            Erik-Jan en Marijke: <a href="mailto:ceremoniemeesters@sneldehaas.nl">ceremoniemeesters@sneldehaas.nl</a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home
