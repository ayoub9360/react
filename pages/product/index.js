import Head from 'next/head'
import Navbar from 'components/Navbar'
import Product from 'components/Product'
import styles from 'styles/App.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Product title="title" price="120€" image="https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" desc="desc" />
      </main>
    </div>
  )
}