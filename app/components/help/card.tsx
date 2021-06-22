import Image from 'next/image'
import styles from '../../styles/Help.module.css'

export default function Card(props) {
    return (
        <div className={styles.card}>
            <p>{props.name}</p>
            <div className={styles.illustationContainer}>
                <Image src={props.image} layout="fill" objectFit="contain" alt="Picture of the author" />
            </div>
        </div>
    )
}
