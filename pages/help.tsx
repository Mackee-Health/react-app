import Card from '../app/components/help/card'
import Header from '../app/components/header'
import styles from '../app/styles/Help.module.css'
import time from '../public/time.svg'
import newMessage from '../public/newMessage.svg'
import questions from '../public/questions.svg'
import security from '../public/security.svg'
import warning from '../public/warning.svg'
import faq from '../public/faq.svg'
import Navbar from '../app/components/navbar'

const cardsTitle = {
    outOfDate: "Mon ordonnance est périmée, que faire ?",
    renewal: "Je peux renouveler mon ordonnance en ligne ?",
    treatement: "J’ai des doutes sur mon traitement",
    privacy: "Comment sont sécurisées les ordonnances ?",
    reportProblem: "Je rencontre un problème sur l’application",
    faq: "FAQ MonOrdo"
}

export default function Help() {
    return (
        <div className={styles.background}>
            <Header name={"Besoin d'aide ?"} />
            <div className={styles.container}>
                <Card name={cardsTitle.outOfDate} image={time} />
                <Card name={cardsTitle.renewal} image={newMessage} />
                <Card name={cardsTitle.treatement} image={questions} />
                <Card name={cardsTitle.privacy} image={security} />
                <Card name={cardsTitle.reportProblem} image={warning} />
                <Card name={cardsTitle.faq} image={faq} />
            </div>
            <Navbar></Navbar>
        </div>
    )
}
