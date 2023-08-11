/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.scss";
import appStyles from "../styles/App.module.scss";
import { getAllLocaties, getLocatieData } from "../lib/locaties";

const Locatie: NextPage<{ data: any }> = ({ data }: { data: any }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Bruiloft Snel de Haas</title>
        <meta name="description" content="Bruiloft Snel de Haas" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.menuTitle}>{data.title}</h1>
        <div className={appStyles.inviteContainer}>
          <button onClick={() => router.push(`${data.locatie}/fotos`)}>
            Oude foto's
          </button>
        </div>
        <div className="body">{data.content}</div>
      </main>
    </div>
  );
};

export default Locatie;

export function getStaticPaths() {
  const paths = getAllLocaties();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const data = getLocatieData(params.locatie);
  return {
    props: {
      data,
    },
  };
}