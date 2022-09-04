import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../styles/Home.module.scss';
import fs from 'fs'

const useCodes = (codes: string[]) => {
  const router = useRouter()
  const [code, setCode] = useState<string>('')

  if (codes.includes(code.toUpperCase())) {
    router.push('/save-the-date?code=' + code.toUpperCase())
  }

  return (code: string) => { setCode(code) }
}

const Home: NextPage<{ codes: string[]}> = ({ codes }: { codes: string[]}) => {
  const checkCode = useCodes(codes)

  return (
    <div className={styles.container}>
      <Head>
        <title>Bruiloft Snel de Haas</title>
        <meta name='description' content='Bruiloft Snel de Haas' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.menuTitle}>Code</h1>
        <input name='code' type='text' onChange={e => checkCode(e.currentTarget.value)} />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export async function getStaticProps() {
  const fileNames = fs.readdirSync(`${process.cwd()}/public/videos`)
  //@ts-ignore
  const codes = fileNames.map(fn => fn.match(/\-(.{5})\./g)[0].replace('-', '').replace('.', ''))

  return {
    props: {
      codes
    }
  }
}

export default Home
