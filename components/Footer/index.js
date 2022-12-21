import styles from './style.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>
                Made with ❤️ by <a href="https://www.github.com/aritroCoder" target="_blank">aritroCoder</a>{' '}
            </div>
            <a href="https://www.github.com/aritroCoder/ConfessionDapp-frontend" target="_blank">
                <Image src="/github-logo.png" width={25} height={25}></Image>
            </a>
        </div>
    )
}

export default Footer
