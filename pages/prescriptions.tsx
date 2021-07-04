import Link from 'next/link'
import Header from '../app/components/header'
import styles from '../app/styles/Prescriptions.module.css'
import Navbar from '../app/components/navbar'

export default function Prescriptions() {
    return (
        <div className={styles.page}>
            <Header name={"Mes ordonnances"} />
            <main className={styles.main}>
                <input type="search" name="search" id="" className={styles.search} placeholder="Rechercher une ordonnance" defaultValue=""/>
                <p style={{width: "100%", color: "#979797CC"}}>Trier par</p>
                <section className={styles.orders}>
                    <select name="doctor" id="doctor-select" placeholder="Docteur">
                        <option>Docteur</option>
                        <option value="docteur_x">Docteur X</option>
                        <option value="docteur_y">Docteur Y</option>
                        <option value="docteur_z">Docteur Z</option>
                    </select>
                    <input type="date" id="start" name="prescriptionDate" min="2018-01-01" max="today"></input>
                    <select name="valid" id="valid-select">
                        <option>Valable</option>
                        <option value="true">Oui</option>
                        <option value="false">Non</option>
                    </select>
                </section>
                <section className={styles.prescriptionsList}>
                    <div>
                        <table className={styles.prescriptionsTable}>
                            <tbody>
                                <tr>
                                    <td><b>Docteur X</b></td>
                                    <td className={styles.date}>10/03/2021</td>
                                    <td><button className={styles.validate}>UTILISER</button></td>
                                </tr>
                                <tr>
                                    <td><b>Docteur X</b></td>
                                    <td className={styles.date}>09/02/2021</td>
                                    <td><button className={styles.validate}>UTILISER</button></td>
                                </tr>
                                <tr>
                                    <td><b>Docteur X</b></td>
                                    <td className={styles.date}>12/01/2021</td>
                                    <td><button className={styles.consult}>Consulter</button></td>
                                </tr>
                                <tr>
                                    <td><b>Docteur X</b></td>
                                    <td className={styles.date}>09/09/2020</td>
                                    <td><button className={styles.consult}>Consulter</button></td>
                                </tr>
                                <tr>
                                    <td><b>Docteur X</b></td>
                                    <td className={styles.date}>23/06/2020</td>
                                    <td><button className={styles.consult}>Consulter</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
            <Navbar></Navbar>
        </div>
    )
}
    