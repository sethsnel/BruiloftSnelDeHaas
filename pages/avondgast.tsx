/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineRollback } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";

import useInviteType from "../hooks/useInviteType";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const { inviteType, href } = useInviteType()
  const { push } = useRouter()

  if (inviteType === 'day') {
    push(`/${href}`)
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Bruiloft Snel de Haas</title>
        <meta name="description" content="Bruiloft Snel de Haas" />
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
        <div className="body">
          <h2>Stukjes & Speeches</h2>
          <p>
            Wil je op de dag zelf een leuke bijdrage leveren? Laat het ons dan
            weten vóór maandag 24 april in verband met de beperkte ruimte in de
            planning van de dag. Houd er rekening mee dat er geen beamer
            beschikbaar is.
          </p>
          <h2>Kleding</h2>
          <p>
            Bij mooi weer vindt de receptie buiten plaats, zorg dus voor
            passende kleding bij het weer. Het bruidspaar vindt het daarnaast
            leuk als je feestelijke kleding aandoet.
          </p>
          <h2>Cadeau</h2>
          <p>
            Mocht je een cadeau willen geven en zoek je nog inspiratie?
            Cadeautip: <BsEnvelope />
          </p>
          <p>
            Vind je het leuker om een fysiek cadeau te geven, dan kun je op{" "}
            <a
              href="https://www.lijstje.nl/sneldehaas"
              target="_blank"
              rel="noreferrer"
            >
              lijstje.nl/sneldehaas
            </a>{" "}
            een verlanglijstje van het bruidspaar vinden.
          </p>
          <h2>Foto's en filmpjes</h2>
          <p>
            Er zal een fotograaf aanwezig zijn om de bruiloft vast te leggen.
            Het bruidspaar verzoekt alle gasten om zelf geen foto's of filmpjes
            te maken.
          </p>
          <h2>Tot slot</h2>
          <p>
            We hopen natuurlijk dat je erbij bent op deze prachtige dag. We
            willen je daarom vragen om je aan- of afwezigheid door te geven via
            de <Link href="/avondgast-rsvp">RSVP</Link>. Doe dit zo snel
            mogelijk, maar in ieder geval voor maandag 24 april.
          </p>
          <h2>Contact</h2>
          <p>
            Seth en Annemijn:{" "}
            <a href="mailto:bruidspaar@sneldehaas.nl">
              bruidspaar@sneldehaas.nl
            </a>
            <br />
            Erik-Jan en Marijke:{" "}
            <a href="mailto:ceremoniemeesters@sneldehaas.nl">
              ceremoniemeesters@sneldehaas.nl
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
