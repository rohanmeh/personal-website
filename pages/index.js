import Head from 'next/head'
import styles from '../styles/Home.module.css'
//Home Page
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

        <p className={styles.description}>
          Serverless Architect
        </p>

        <div className={styles.grid}>
          <a href="https://dev.to/rohanmehta_dev" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>Posts on application design and development</p>
          </a>

          <a href="https://github.com/rohanmeh" className={styles.card}>
            <h3>GitHub &rarr;</h3>
            <p>Side projects, prototypes, and pull requests</p>
          </a>

          <a
            href="https://twitter.com/rohanmehta_dev"
            className={styles.card}
          >
            <h3>Twitter &rarr;</h3>
            <p>
              Tweets on application design and development
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/rohan-mehta-1052b570/"
            className={styles.card}
          >
            <h3>LinkedIn &rarr;</h3>
            <p>Get in touch with me over at LinkedIn </p>
          </a>

          
        </div>
      </main>
    </div>
  )
}
