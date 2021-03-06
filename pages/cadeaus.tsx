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
                <h1 className={styles.menuTitle}>Cadeaus</h1>
                <ul className={styles.menu}>
                    <li>
                        <Link href="/">
                            <a>🏡 home</a>
                        </Link>
                    </li>
                </ul>
                <div className='body'>
                    <p>Cadeaus</p>
                </div>
            </main>
        </div>
    );
};

export default Home;
