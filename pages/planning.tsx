/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { AiOutlineRollback } from "react-icons/ai"
import { MdWavingHand } from "react-icons/md"
import { IoMdBoat } from "react-icons/io"
import { GiMeal, GiPartyPopper } from "react-icons/gi"
import { FaChurch, FaGlassCheers } from "react-icons/fa"

import useInviteType from "../hooks/useInviteType"

import styles from "../styles/Home.module.scss"
import planningStyles from "../styles/planning.module.scss"

const Home: NextPage = () => {
  const { inviteType } = useInviteType()

  return (
    <div className={styles.container}>
      <Head>
        <title>Bruiloft Snel de Haas</title>
        <meta name="description" content="Bruiloft Snel de Haas" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.menuTitle}>Planning</h1>
        <ul className={styles.menu}>
          <li>
            <Link className="link" href="/">
              <AiOutlineRollback /> home
            </Link>
          </li>
        </ul>
        <div className="body">
          <div className="timeline">
            {inviteType === "day" && (
              <>
                <div className="container">
                  <div className="icon">
                    <MdWavingHand />
                  </div>
                  <div className="content">
                    <h3>12.15</h3>
                    <p>Welkomst</p>
                  </div>
                </div>
                <div className="container">
                  <div className="icon">
                    <IoMdBoat />
                  </div>
                  <div className="content">
                    <h3>12.45</h3>
                    <p>Varen</p>
                  </div>
                </div>
                <div className="container">
                  <div className="icon">
                    <GiMeal />
                  </div>
                  <div className="content">
                    <h3>16.00</h3>
                    <p>Dinner</p>
                  </div>
                </div>
              </>
            )}
            <div className="container church">
              <div className="icon">
                <FaChurch />
              </div>
              <div className="content">
                <h3>19.15</h3>
                <p>Kerkdienst</p>
              </div>
            </div>
            <div className="container drinks">
              <div className="icon">
                <FaGlassCheers />
              </div>
              <div className="content">
                <h3>20.15</h3>
                <p>Receptie</p>
              </div>
            </div>
            <div className="container party">
              <div className="icon">
                <GiPartyPopper />
              </div>
              <div className="content">
                <h3>22:00</h3>
                <p>Feest</p>
              </div>
            </div>
          </div>
          <h2>Bereikbaarheid & parkeren</h2>
          <div className={planningStyles.adres}>
            {inviteType === "day" && (
              <p>
                Parkeren bij Rederij De Stichtse Vecht kan op Parkeerplaats
                Sluyswijck, 3604 BA Maarssen.
              </p>
            )}
            <p>
              Bistro Belle is bereikbaar met het OV via halte Oud-Zuilen. Vanaf
              daar is het nog 8 minuten lopen naar Bistro Belle.
            </p>
            <p>
              Parkeren bij de slotkapel en Bistro Belle kan op het
              parkeerterrein van Slot Zuylen, aan de Burgemeester van
              Norbruislaan en bij de nabijgelegen sportvelden. Het is raadzaam
              om geen waardevolle spullen in de auto te laten.
            </p>
          </div>
          <h2>Adressen</h2>
          {inviteType === "day" && (
            <div className={planningStyles.adres}>
              <h3>Varen</h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.nl/maps/place/Rederij+Stichtse+Vecht+opstapplaats/@52.1316505,5.0491531,17z/data=!4m14!1m7!3m6!1s0x47c671d8ab0d682b:0x61ea0e95e8eaf2d2!2sRederij+Stichtse+Vecht!8m2!3d52.142055!4d5.039422!16s%2Fg%2F1ptxcbt7v!3m5!1s0x47c66e2de368d28b:0x8d332e78be9f2923!8m2!3d52.130817!4d5.0499426!16s%2Fg%2F11c0xst5xk"
              >
                Rederij Stichtse Vecht, 3604 BA Maarssen
              </a>
            </div>
          )}
          <div className={planningStyles.adres}>
            <h3>Kerk</h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/place/Dorpsstraat+10,+3611+AE+Oud+Zuilen/@52.1269237,5.0691421,17z/data=!3m1!4b1!4m5!3m4!1s0x47c66e4c8deea275:0x3732f163962d2a5e!8m2!3d52.1269204!4d5.0713308"
            >
              Dorpsstraat 10, 3611 AE Oud Zuilen
            </a>
          </div>
          <div className={planningStyles.adres}>
            <h3>Receptie en feest</h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/place/Dorpsstraat+12,+3611+AE+Oud+Zuilen/@52.1269237,5.0691421,17z/data=!4m5!3m4!1s0x47c66e4c8f71f1b3:0x270ceee840756cc4!8m2!3d52.1270595!4d5.0709948"
            >
              Dorpsstraat 12, 3611 AE Oud Zuilen
            </a>
          </div>
          <div className={planningStyles.adres}>
            <h3>Parkeren</h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/place/52°07'38.5%22N+5°04'19.5%22E/@52.1273083,5.0715689,19z/data=!4m14!1m7!3m6!1s0x47c66e4c8f71f1b3:0x270ceee840756cc4!2sDorpsstraat+12,+3611+AE+Oud+Zuilen!3b1!8m2!3d52.1270595!4d5.0709948!3m5!1s0x0:0x286b8fa5f25d40a!7e2!8m2!3d52.1273485!4d5.0720777"
            >
              Parkeerplaats achter Belle bij Slot Zuylen
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
