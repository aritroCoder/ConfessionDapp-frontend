import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Howto.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>Confession DApp</title>
                <meta name="description" content="Confession Dapp made over ethereum" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className={styles.instructions}>
                <h2>Steps to use this</h2>
                <ol>
                    <li>
                        Install a web3 wallet (like{' '}
                        <a
                            href="https://metamask.io/download/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Metamask
                        </a>
                        )
                    </li>
                    <li>
                        In your wallet, switch to the goerli testnet as it only works there
                        currently
                    </li>
                    <li>
                        Go to a{' '}
                        <a
                            href="https://goerlifaucet.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Goerli testnet faucet
                        </a>{' '}
                        and add some funds to your account (even 0.001ETH is fine)
                    </li>
                    <li>
                        Now go back to <Link href="/">Home page</Link> and use this app. If you run
                        out of funds, go back to the faucet again
                    </li>
                </ol>
            </div>
            <Footer />
        </>
    )
}
