import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rohan Mehta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Rohan Mehta
        </h1>
        <h2 className={styles.h2}>
          Serverless Architect
        </h2>
        <div className={styles.grid}>
          <a href="https://github.com/rohanmeh/" className={styles.card}>
            <h3>GitHub</h3>
            <p>Side projects and prototypes.</p>
          </a>
          <a
            href="https://dev.to/rohanmehta_dev"
            className={styles.card}
          >
            <h3>Blog</h3>
            <p>
              Posts on application architecture.
            </p>
          </a>
          <a href="https://twitter.com/rohanmehta_dev" className={styles.card}>
            <h3>Twitter</h3>
            <p>Tweets on application architecture.</p>
          </a>
          <a
            href="https://www.linkedin.com/in/rohan-mehta-1052b570/"
            className={styles.card}
          >
            <h3>LinkedIn</h3>
            <p>Get in touch on LinkedIn.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
