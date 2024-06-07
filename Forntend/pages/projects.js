// pages/projects.js

import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>My Projects</h1>
        <p>Here are some of my projects.</p>
        {/* List your projects here */}
      </main>
    </div>
  );
}
