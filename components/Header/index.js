import { ConnectButton } from 'web3uikit'
import styles from './style.module.css'

export default function Header() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navTitle}>Confessions Dapp</div>
            <div className="connectWalllet">
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}
