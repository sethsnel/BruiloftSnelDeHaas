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
                <h1 className={styles.menuTitle}>Planning</h1>
                <ul className={styles.menu}>
                    <li>
                        <Link href="/">
                            <a>🏡 home</a>
                        </Link>
                    </li>
                </ul>
                <div className='body'>
                    <div className="timeline">
                        <div className="container welcome">
                            <div className="content">
                                <h3>12.00</h3>
                                <p>Welkomst</p>
                            </div>
                        </div>
                        <div className="container arrival">
                            <div className="content">
                                <h3>12.30</h3>
                                <p>Aankomst bruidspaar</p>
                            </div>
                        </div>
                        <div className="container cake">
                            <div className="content">
                                <h3>15.00</h3>
                                <p>Taart aansnijden</p>
                            </div>
                        </div>
                        <div className="container camera">
                            <div className="content">
                                <h3>15.30</h3>
                                <p>Foto moment</p>
                            </div>
                        </div>
                        <div className="container dinner">
                            <div className="content">
                                <h3>16.00</h3>
                                <p>Dinner</p>
                            </div>
                        </div>
                        <div className="container church">
                            <div className="content">
                                <h3>19.00</h3>
                                <p>Kerkdienst</p>
                            </div>
                        </div>
                        <div className="container drinks">
                            <div className="content">
                                <h3>20.00</h3>
                                <p>Receptie</p>
                            </div>
                        </div>
                        <div className="container party">
                            <div className="content">
                                <h3>21:30</h3>
                                <p>Feest</p>
                            </div>
                        </div>
                        <div className="container welcome">
                            <div className="content">
                                <h3>00:30</h3>
                                <p>Sluit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
