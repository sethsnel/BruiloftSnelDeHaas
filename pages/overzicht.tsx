/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bruiloft Snel de Haas</title>
        <meta name='description' content='Bruiloft Snel de Haas' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.menuTitle}>Menu</h1>
        <ul className={styles.menu}>
          <li>
            <Link href="/save-the-date">
              <a>VUL SAVE THE DATE CODE IN</a>
            </Link>
          </li>
          <li>
            <Link href="/planning">
              <a>Planning</a>
            </Link>
          </li>
          <li>
            <Link href="/daggast">
              <a>DAGGASTEN</a>
            </Link>
          </li>
          <li>
            <Link href="/receptie">
              <a>RECEPTIE/KERK</a>
            </Link>
          </li>
          <li>
            <Link href="/avondgast">
              <a>AVONDGASTEN</a>
            </Link>
          </li>
          <li>
            <Link href="/cadeaus">
              <a>Cadeautips</a>
            </Link>
          </li>
        </ul>
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
