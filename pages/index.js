import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PostConfession from '../components/PostConfession'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <>
          <Head>
              <title>Confession DApp</title>
              <meta name="description" content="Confession Dapp made over ethereum" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/confess.png" />
          </Head>
          <Header />
          <PostConfession />
          <Footer />
      </>
  )
}
