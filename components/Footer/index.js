import styles from './style.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>
                Made with ❤️ by{' '}
                <a
                    href="https://www.github.com/aritroCoder"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    aritroCoder
                </a>{' '}
            </div>
            <a
                href="https://www.github.com/aritroCoder/ConfessionDapp-frontend"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="/github-logo.png" width={25} height={25} alt="github"></Image>
            </a>
        </div>
    )
}

export default Footer
