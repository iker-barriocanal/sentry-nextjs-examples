import Head from "next/head";
import styles from "../styles/Home.module.css";

import axios from "axios";

import * as Sentry from "@sentry/nextjs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sample Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>NextJS test app</h1>

        <div className={styles.grid}>
          <button
            onClick={() => {
              throw new Error("sample frontend error");
            }}
          >
            <h3>Frontend error</h3>
          </button>

          <button
            onClick={async () => {
              await axios.get("http://127.0.0.1:3000/api/server");
            }}
          >
            <h3>Backend error</h3>
          </button>

          <button
            onClick={() => {
              Sentry.captureException(new Error("sample frontend error"));
            }}
          >
            <h3>`captureException`</h3>
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
