import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/Home.module.scss'

const useCodes = (codes: string[]) => {
  const router = useRouter()
  const [code, setCode] = useState<string>('')

  if (codes.includes(code.toUpperCase())) {
    router.push('/save-the-date?code=' + code.toUpperCase())
  }

  return (code: string) => { setCode(code) }
}

const Home: NextPage<{ codes: string[] }> = ({ codes }: { codes: string[] }) => {
  const checkCode = useCodes(codes)

  return (
    <div className={styles.container}>
      <Head>
        <title>Bruiloft Snel de Haas</title>
        <meta name='description' content='Bruiloft Snel de Haas' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.menuTitle}>Code</h1>
        <input name='code' type='text' onChange={e => checkCode(e.currentTarget.value)} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // const fileNames = fs.readdirSync(`${process.cwd()}/public/videos`)
  // console.info(process.cwd())
  // console.info(fileNames)
  // //@ts-ignore
  // const codes = fileNames.map(fn => fn.match(/\-(.{5})\./g)[0].replace('-', '').replace('.', ''))

  return {
    props: {
      codes: [
        'KVRAR', 'XGYYM', 'MYQRT', 'MDGAT',
        'MKBDU', 'CXCTY', 'GMDJF', 'KQCML',
        'ATPKR', 'MPPEJ', 'KGTKQ', 'AKUAF',
        'YHLPR', 'YDFFE', 'SRTYF', 'BZGZR',
        'RQXFK', 'QYZUT', 'TZXDN', 'HUZYR',
        'FCQBA', 'BJTNS', 'HEVDZ', 'PXSLL',
        'ZVHQL', 'LOASE', 'HQSRS', 'BAVEP',
        'NNYCD', 'TUCBF', 'EUVZA', 'FVZFP',
        'GXAEP', 'YFLJX', 'DGUGF', 'PJNJL',
        'EDUEU'
      ]
    }
  }
}

export default Home
