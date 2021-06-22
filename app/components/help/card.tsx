import Image from 'next/image'
import styles from '../../styles/Help.module.css'
import illustration from '../../../public/undraw_Hello.svg'

export default function Card(props) {
    return (
        <div className={styles.card}>
            <p>{props.name}</p>
            <div className={styles.illustationContainer}>
                <Image src={illustration} alt="Picture of the author" />
            </div>
        </div>
    )
}
