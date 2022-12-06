/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import fs from 'fs'

import styles from '../styles/Home.module.scss'

type saveTheDateProps = {
  fileNames: string[]
  codes: string[]
  dayGuestsCodes: string[]
}

const Home: NextPage<saveTheDateProps> = ({
  fileNames,
  codes,
  dayGuestsCodes
}: saveTheDateProps) => {
  const router = useRouter()

  if (
    router.query.code !== undefined &&
    !codes.includes(router.query.code as string)
  ) {
    router.push('/')
  }

  const fileName = fileNames.find((fn) =>
    fn.includes(router.query.code as string)
  )

  const isDayGuest = dayGuestsCodes.includes(router.query.code as string)

  const bistroBelleLink = <a href="https://www.google.com/maps/place/Bistro+Belle/@52.1270861,5.0687332,17z/data=!3m1!4b1!4m5!3m4!1s0x47c66e4c8f8472cd:0xbf3662610e48b262!8m2!3d52.1270828!4d5.0709219" target="_blank" rel="noreferrer">Bistro Belle</a>
  const slotkapelLink = <a href="https://www.google.com/maps/place/Kerk+te+Oud-Zuilen/@52.1269834,5.0712192,18.38z/data=!4m12!1m6!3m5!1s0x47c66e4c8f8472cd:0xbf3662610e48b262!2sBistro+Belle!8m2!3d52.1270828!4d5.0709219!3m4!1s0x47c66e4c8e04126f:0x40267540fe1b4faf!8m2!3d52.1268866!4d5.071216" target="_blank" rel="noreferrer">de slotkapel</a>

  return (
    <div className={styles.container}>
      <Head>
        <title>Bruiloft Snel de Haas</title>
        <meta name='description' content='Bruiloft Snel de Haas' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.menuTitle}>Save the date!</h1>
        <ul className={styles.menu}>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
        </ul>
        <div className='body'>
          {router.query.code && (
            <video controls>
              <source src={`/videos/${fileName}`} type='video/mp4' />
            </video>
          )}
        </div>
        <p>Beste {isDayGuest ? 'daggast' : 'avondgast'},</p>
        <p>Aanvullende informatie:</p>
        <ul>

          {isDayGuest ?
            <li>Locaties: {bistroBelleLink} in Oud-Zuilen en {slotkapelLink} van Slot Oud-Zuylen`</li> :
            <li>Locaties: {slotkapelLink} van Slot Oud-Zuylen en {bistroBelleLink} in Oud-Zuilen</li>
          }
          <li>
            Reken erop dat de dag rond {isDayGuest ? '12:00' : '19:00'} uur zal beginnen
          </li>
          <li>
            Meer informatie zal later volgen, tegelijk met de trouwkaart.
          </li>
        </ul>
        <p>Voor vragen: <a href="mailto:bruidspaar@sneldehaas.nl" title="Mail het bruidspaar">bruidspaar@sneldehaas.nl</a></p>
        <p>Liefs, Seth en Annemijn</p>
      </main>
    </div >
  )
}

export async function getStaticProps() {
  // const fileNames = fs.readdirSync(`${process.cwd()}/public/videos`)
  // //@ts-ignore
  // const codes = fileNames.map(fn => fn.match(/\-(.{5})\./g)[0].replace('-', '').replace('.', ''))
  // console.info(fileNames)
  // console.info(codes)
  return {
    props: {
      fileNames: [
        'ANNE-REINOUT-KVRAR.mp4',
        'BERTJAN-XGYYM.mp4',
        'BOS-MYQRT.mp4',
        'DAAN-DVK-MDGAT.mp4',
        'DAAN-S-MKBDU.mp4',
        'DAAS-CXCTY.mp4',
        'DIEDERICK-GMDJF.mp4',
        'DION-KQCML.mp4',
        'ERIK-ATPKR.mp4',
        'ERNST-MPPEJ.mp4',
        'FAM-KOK-KGTKQ.mp4',
        'FAM-KREUNING-AKUAF.mp4',
        'FAM-SNEL-YHLPR.mp4',
        'FEROX-LICHTING-YDFFE.mp4',
        'FEROX-SRTYF.mp4',
        'GEZIN-KOK-BZGZR.mp4',
        'HAAS-RQXFK.mp4',
        'HUISGENOTEN-ANNE-QYZUT.mp4',
        'ICHTHUS-TZXDN.mp4',
        'JOHAN-ADRIE-HUZYR.mp4',
        'LISANNA-MARCEL-FCQBA.mp4',
        'LUCAS-BJTNS.mp4',
        'MARIJKE-RIK-HEVDZ.mp4',
        'NEEFTJES-LUIT-PXSLL.mp4',
        'OMA-HAAS-ZVHQL.mp4',
        'OPA-OMA-LOASE.mp4',
        'OPAOMA-KOK-HQSRS.mp4',
        'OPAOMA-LUIT-BAVEP.mp4',
        'OPAOMA-SNEL-NNYCD.mp4',
        'RACHEL-TUCBF.mp4',
        'RUBICON-EUVZA.mp4',
        'RUTH-FVZFP.mp4',
        'SNEL-GXAEP.mp4',
        'STEVEN-YFLJX.mp4',
        'STUDENTEN-DGUGF.mp4',
        'THOMAS-PJNJL.mp4',
        'VPO-EDUEU.mp4',
      ],
      codes: [
        'KVRAR',
        'XGYYM',
        'MYQRT',
        'MDGAT',
        'MKBDU',
        'CXCTY',
        'GMDJF',
        'KQCML',
        'ATPKR',
        'MPPEJ',
        'KGTKQ',
        'AKUAF',
        'YHLPR',
        'YDFFE',
        'SRTYF',
        'BZGZR',
        'RQXFK',
        'QYZUT',
        'TZXDN',
        'HUZYR',
        'FCQBA',
        'BJTNS',
        'HEVDZ',
        'PXSLL',
        'ZVHQL',
        'LOASE',
        'HQSRS',
        'BAVEP',
        'NNYCD',
        'TUCBF',
        'EUVZA',
        'FVZFP',
        'GXAEP',
        'YFLJX',
        'DGUGF',
        'PJNJL',
        'EDUEU',
      ],
      dayGuestsCodes: [
        'GXAEP',
        'BZGZR',
        'RQXFK',
        'PJNJL',
        'BJTNS',
        'NNYCD',
        'HQSRS',
        'BAVEP',
        'ZVHQL',
        'MKBDU',
        'MDGAT',
        'MPPEJ',
        'GMDJF',
        'HUZYR',
        'KVRAR',
        'HEVDZ',
        'FCQBA',
        'TUCBF',
        'FVZFP',
        'ATPKR',
      ],
    },
  }
}

export default Home
