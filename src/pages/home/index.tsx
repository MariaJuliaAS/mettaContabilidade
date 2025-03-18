import styles from '../../styles/home.module.css';
import { FirstScreen } from "../../components/firstScreen";
import { WhoAreWe } from "../../components/whoAreWe";
import { OurServices } from "../../components/ourServices";
import { BusinessNews } from "../../components/businessNews";

export function Home() {
    return (
        <main className={styles.homeContainer}>
            <FirstScreen />
            <WhoAreWe />
            <OurServices />
            <BusinessNews />
        </main>
    )
}