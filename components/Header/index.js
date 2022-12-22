import { ConnectButton } from 'web3uikit'
import Link from 'next/link'
import styles from './style.module.css'

export default function Header() {
    return (
        <div className={styles.navbar}>
            <Link href="/" className={styles.navTitle}>Confessions Dapp</Link>
            <Link href="/howto" className={styles.navLink}>How to use</Link>
            <div className="connectWalllet">
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}
