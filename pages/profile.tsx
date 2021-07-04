import Image from 'next/image'
import Link from 'next/link'
import Header from '../app/components/header'
import styles from '../app/styles/Profile.module.css'
import ProfileCard from '../app/components/profileCard';
import heart from '../public/heart.svg'
import phone from '../public/phone.svg'
import Navbar from '../app/components/navbar';

export default function Home() {
    return (
        <div className={styles.page}>
            <Header name={"Mon profil"} />
            <main className={styles.main}>
                <ProfileCard name={"Ornella"} />
                <section className={styles.informations}>
                    <p className={styles.headerText}>Mes informations</p>
                    <div className={styles.card}>
                        <table className={styles.informationsTable}>
                            <tr>
                                <td>N° de sécurité sociale</td>
                                <td className={styles.detail}>1 23 456 789 ABCD</td>
                            </tr>
                            <tr>
                                <td>Adresse</td>
                                <td className={styles.detail}>1 rue de Rivoli Paris 75000</td>
                            </tr>
                            <tr>
                                <td>N° de téléphone</td>
                                <Link href="tel:06 00 11 22 33" passHref>
                                    <td className={styles.detail}>06 00 11 22 33</td>
                                </Link>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td className={styles.detail}>ornella@gmail.com</td>
                            </tr>
                        </table>
                    </div>
                </section>

                <section className={styles.favorite}>
                    <p className={styles.headerText}>Mon médecin traitant</p>
                    <div className={styles.card}>
                        <div className={styles.header}>
                            <div>
                                <p className={styles.title}>Docteur Jean Dupont</p>
                                <p className={styles.distance}>à 300m</p>
                            </div>
                        </div>
                        <div className={styles.header}>
                            <div>
                                <p className={styles.description}>Ouvert de 9h à 19h</p>
                                <Link href="tel:06 11 22 33 44" passHref>
                                    <p className={styles.call}><Image src={phone} alt="Phone"></Image> Appeler</p>
                                </Link>
                            </div>
                            <Link href="tel:06 11 22 33 44" passHref>
                                <button className={styles.destination}>Prendre RDV</button>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className={styles.favorite}>
                    <p className={styles.headerText}>Ma pharmacie préférée</p>
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
                                <Link href="tel:06 11 22 33 44" passHref>
                                    <p className={styles.call}><Image src={phone} alt="Phone"></Image> Appeler</p>
                                </Link>
                            </div>
                            <button className={styles.destination}>Itinéraire</button>
                        </div>
                    </div>
                </section>
            </main>
            <Navbar></Navbar>
        </div>
    )
}
    