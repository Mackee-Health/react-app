import Image from 'next/image'
import styles from '../styles/App.module.css'
import profilePicture from '../../public/profilePicture.jpg'

export default function ProfileCard(props) {
    return (
        <div className={styles.profileContainer}>
            <p>{props.name}</p>
            <div className={styles.profilePictureContainer}>
                <Image src={profilePicture} layout="fill" objectFit="cover" alt="Profile pciture" />
            </div>
        </div>
    )
}
