import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../styles/Home.module.scss';
import { codes } from './save-the-date';



const useCodes = () => {
  const router = useRouter()
  const [code, setCode] = useState<string>('')

  if (codes.includes(code.toUpperCase())) {
    router.push('/save-the-date?code=' + code.toUpperCase())
  }

  return (code: string) => { setCode(code) }
}

const Home: NextPage = () => {
  const checkCode = useCodes()

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
  );
};

export default Home;
