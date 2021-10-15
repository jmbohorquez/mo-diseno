import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MO Diseño y Arquitectura</title>
        <meta name="description" content="servicio de construcción instalaciones, remodelaciones y construcciones" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>MO Diseño y Arquitectura</h1>
        <p>Especialistas en servicio de construcción y remodelaciones en Colombia</p>
      </main>
    </div>
  )
}
