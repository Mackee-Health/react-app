import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../app/components/header'
import styles from '../app/styles/Home.module.css'
import ProfileCard from '../app/components/profileCard';
import heart from '../public/heart.svg'
import phone from '../public/phone.svg'

export default function Home() {
    return (
        <div className={styles.page}>
            <Header name={"Mon espace MonOrdo"} />
            <main className={styles.main}>
                <ProfileCard name={"Ornella"} />
                <div className={styles.prescriptions}>
                    <p className={styles.headerText}>Mes dernières ordonnances</p>
                    <div className={styles.card}>
                        <p className={styles.title}>Docteur Jean Dupont</p>
                        <p className={styles.description}>Visite du 03/11/2021</p>
                        <section className={styles.buttonContainer}>
                            <button className={styles.consult}>Consulter l&apos;ordonnance</button>
                            <button className={styles.validate}>UTILISER</button>
                        </section>
                    </div>
                    <button className={styles.more}>Voir toutes mes ordonnances</button>
                </div>

                <div className={styles.pharmacies}>
                    <p className={styles.headerText}>Mes dernières ordonnances</p>
                    <div className={styles.card}>
                        <div className={styles.header}>
                            <div>
                                <p className={styles.title}>Pharmacie du Parc</p>
                                <p className={styles.distance}>à 300m</p>
                            </div>
                            <Image src={heart} alt="Heart"></Image>
                        </div>
                        <div className={styles.header}>
                            <div>
                                <p className={styles.description}>Ouverte de 9h à 19h</p>
                                <p className={styles.call}><Image src={phone} alt="Phone"></Image> Appeler</p>
                            </div>
                            <button className={styles.destination}>Itinéraire</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
    