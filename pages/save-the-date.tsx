/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.scss'

export const codes = [
    'DEKLS'
]

const Home: NextPage = () => {
    const router = useRouter()

    if (router.query.code !== undefined && !codes.includes(router.query.code as string)) {
        router.push('/')
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Bruiloft Snel de Haas</title>
                <meta name='description' content='Bruiloft Snel de Haas' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.menuTitle}>Save the date!</h1>
                <ul className={styles.menu}>
                    <li>
                        <Link href="/">
                            <a>🏡 home</a>
                        </Link>
                    </li>
                </ul>
                <div className='body'>
                    {
                        (router.query.code) && (
                            <video controls>
                                <source src={`/videos/${router.query.code}.mp4`} type="video/mp4" />
                            </video>
                        )
                    }
                </div>
            </main>
        </div>
    );
};

export default Home
