// pages/about.js
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>About Me</h1>
        <p>This is the about page.</p>
        <Link href="/">Go back to home</Link>
      </main>
    </div>
  );
}
