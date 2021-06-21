import Card from '../app/components/help/card'
import styles from '../app/styles/Help.module.css'

export default function Help() {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <Card name="Sara" />
                <Card name="Sara" />
                <Card name="Sara" />
                <Card name="Sara" />
            </div>
        </div>
    )
}
