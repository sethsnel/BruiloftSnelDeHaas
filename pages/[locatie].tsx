/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.scss";
import appStyles from "../styles/App.module.scss";
import {
  getPathsLocaties,
  getLocatieFotosPaden,
  getLocatieData,
  getPathsCount,
} from "../lib/locaties";
import { useEffect, useState } from "react";

type LocatieProps = { data: any; heeftFotos: boolean; aantalLocaties: number };

const Locatie: NextPage<LocatieProps> = ({
  data,
  heeftFotos,
  aantalLocaties,
}: LocatieProps) => {
  const router = useRouter();
  const aantalLocatiesBezocht = useLocatieCounter(data.locatie);

  return (
    <div className={styles.container}>
      <Head>
        <title>Bruiloft Snel de Haas</title>
        <meta name="description" content="Bruiloft Snel de Haas" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.menuTitle}>{data.title}</h1>
        <div className={appStyles.inviteContainer}>
          {heeftFotos && (
            <button onClick={() => router.push(`${data.locatie}/fotos`)}>
              Bekijk foto's
            </button>
          )}
        </div>
        <div className="body" dangerouslySetInnerHTML={{ __html: data.content }} />
        <div className={appStyles.inviteContainer}>{aantalLocatiesBezocht} / {aantalLocaties}</div>
      </main>
    </div>
  );
};

export default Locatie;

export function getStaticPaths() {
  const paths = getPathsLocaties();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const data = getLocatieData(params.locatie);
  const fotos = getLocatieFotosPaden();

  return {
    props: {
      data,
      aantalLocaties: getPathsCount(),
      heeftFotos: fotos.includes(params.locatie),
    },
  };
}

function useLocatieCounter(locatie: string) {
  const [locatieCounter, setlocatieCounter] = useState<string[]>([]);

  useEffect(() => {
    const locatieCounterKey = "locatieCounter";
    const locatieCounter = JSON.parse(
      localStorage.getItem(locatieCounterKey) ?? "[]"
    ) as string[];

    if (!locatieCounter.includes(locatie)) {
      locatieCounter.push(locatie);
    }

    localStorage.setItem(locatieCounterKey, JSON.stringify(locatieCounter));
    setlocatieCounter(locatieCounter);
  }, [locatie]);

  return locatieCounter.length;
}
