/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  getPathsFotos,
  getLocatieData,
  getLocatieFotos,
} from "../../lib/locaties";

import styles from "../../styles/Home.module.scss";
import appStyles from "../../styles/App.module.scss";

const Locatie: NextPage<{ data: any; fotos: string[] }> = ({ data, fotos }: { data: any; fotos: string[] }) => {
  const router = useRouter();

  const images = fotos.map((foto: string) => {
    return (
      <div key={foto} className="img-container">
        <Image
          src={foto}
          alt={data.title}
          fill={true}
          style={{ objectFit: "cover" }}
        />
        ;
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Bruiloft Snel de Haas</title>
        <meta name="description" content="Bruiloft Snel de Haas" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.menuTitle}>{data.title}</h1>
        <div className={appStyles.inviteContainer}>
          <button onClick={() => router.push("/" + data.locatie)}>
            Beschrijving
          </button>
        </div>
        <div className="body">
          <p>Kantel mobiel voor brede weergave.</p>
          {images}
        </div>
      </main>
    </div>
  );
};

export default Locatie;

export function getStaticPaths() {
  const paths = getPathsFotos();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const data = getLocatieData(params.locatie);
  const fotos = getLocatieFotos(params.locatie);
  return {
    props: {
      data,
      fotos,
    },
  };
}
