import Image from 'next/image'
import styles from '../styles/App.module.css'
import logo from '../../public/logo.svg'

export default function Header(props) {
    return (
        <div className={styles.headerContainer}>
            <p>{props.name}</p>
            <div className={styles.logoContainer}>
                <Image src={logo} alt="Picture of the author" />
            </div>
        </div>
    )
}
