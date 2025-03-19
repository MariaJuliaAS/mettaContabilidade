import styles from '../../styles/home.module.css';
import { FirstScreen } from "../../components/homeComponents/firstScreen";
import { WhoAreWe } from "../../components/homeComponents/whoAreWe";
import { OurServices } from "../../components/homeComponents/ourServices";
import { BusinessNews } from "../../components/homeComponents/businessNews";

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