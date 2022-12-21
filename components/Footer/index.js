import styles from './style.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>
                Made with ❤️ by <a href="http://github.com/aritroCoder">aritroCoder</a>{' '}
            </div>
            <a href="">
                <Image src="/github-logo.png" width={25} height={25}></Image>
            </a>
        </div>
    )
}

export default Footer
