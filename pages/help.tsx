import Card from '../app/components/help/card'
import Header from '../app/components/header'
import styles from '../app/styles/Help.module.css'

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
                <Card name={cardsTitle.outOfDate} />
                <Card name={cardsTitle.renewal} />
                <Card name={cardsTitle.treatement} />
                <Card name={cardsTitle.privacy} />
                <Card name={cardsTitle.reportProblem} />
                <Card name={cardsTitle.faq} />
            </div>
        </div>
    )
}
