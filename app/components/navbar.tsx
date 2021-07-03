import Image from "next/image"
import styles from "../styles/App.module.css"
import home from "../../public/home.svg"
import prescription from "../../public/prescription.svg"
import infoCircle from "../../public/infoCircle.svg"
import profilePicture from "../../public/profilePicture.jpg"
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className={styles.mobileBottomNav}>
      <Link href="/" passHref>
        <div className={styles.mobileBottomNavItem}>
          <div className={styles.mobileBottomNavItemContent}>
            <div className={styles.mobileBottomNavImage}>
              <Image src={home} layout="fill" alt=""></Image>
            </div>
            <p>Accueil</p>
          </div>
        </div>
      </Link>
      <Link href="prescriptions" passHref>
        <div className={styles.mobileBottomNavItem}>
          <div className={styles.mobileBottomNavItemContent}>
            <div className={styles.mobileBottomNavImage}>
              <Image src={prescription} layout="fill" alt=""></Image>
            </div>
            <p>Ordonnances</p>
          </div>
        </div>
      </Link>
      <Link href="help" passHref>
        <div className={styles.mobileBottomNavItem}>
          <div className={styles.mobileBottomNavItemContent}>
            <div className={styles.mobileBottomNavImage}>
              <Image src={infoCircle} layout="fill" alt=""></Image>
            </div>
            <p>Aide</p>
          </div>
        </div>
      </Link>
      <Link href="profile" passHref>
      <div className={styles.mobileBottomNavItem}>
        <div className={styles.mobileBottomNavItemContent}>
          <div className={styles.mobileBottomNavProfile}>
            <Image src={profilePicture} layout="fill" objectFit="cover" alt=""></Image>
          </div>
          <p>Profil</p>
        </div>
      </div>
      </Link>
    </nav>
  );
}
