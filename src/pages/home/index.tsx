import { FirstScreen } from "../../components/firstScreen";
import { WhoAreWe } from "../../components/whoAreWe";
import styles from '../../styles/home.module.css';

export function Home() {
    return (
        <main className={styles.homeContainer}>
            <FirstScreen />
            <WhoAreWe />
        </main>
    )
}