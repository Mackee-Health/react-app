import Image from 'next/image'
import Link from 'next/link'
import Header from '../app/components/header'
import styles from '../app/styles/Home.module.css'
import ProfileCard from '../app/components/profileCard';
import heart from '../public/heart.svg'
import phone from '../public/phone.svg'
import Navbar from '../app/components/navbar';

export default function Home() {
    return (
        <div className={styles.page}>
            <Header name={"Mon espace MonOrdo"} />
            <main className={styles.main}>
                <ProfileCard name={"Ornella"} />
                <section className={styles.prescriptions}>
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
                </section>

                <section className={styles.pharmacies}>
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
                </section>

                <section className={styles.prescriptionsList}>
                    <hr />
                    <p className={styles.headerText}>Mes dernières ordonnances</p>
                    <div className={styles.card}>
                        <table className={styles.prescriptionsTable}>
                            <tr>
                                <td>Ordonnance de <b>Docteur X</b>.</td>
                                <td className={styles.date}>10/03/2021</td>
                            </tr>
                            <tr>
                                <td>Ordonnance de <b>Docteur X</b>.</td>
                                <td className={styles.date}>09/02/2021</td>
                            </tr>
                            <tr>
                                <td>Ordonnance de <b>Docteur X</b>.</td>
                                <td className={styles.date}>12/01/2021</td>
                            </tr>
                            <tr>
                                <td>Ordonnance de <b>Docteur X</b>.</td>
                                <td className={styles.date}>09/09/2020</td>
                            </tr>
                            <tr>
                                <td>Ordonnance de <b>Docteur X</b>.</td>
                                <td className={styles.date}>23/06/2020</td>
                            </tr>
                        </table>
                    </div>
                </section>
            </main>
            <Navbar></Navbar>
        </div>
    )
}
    