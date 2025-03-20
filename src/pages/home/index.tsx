import styles from '../../styles/home.module.css';
import { FirstScreen } from "../../components/homeComponents/firstScreen";
import { WhoAreWe } from "../../components/homeComponents/whoAreWe";
import { OurServices } from "../../components/homeComponents/ourServices";
import { BusinessNews } from "../../components/homeComponents/businessNews";
import { ContactUs } from '../../components/homeComponents/contactUs';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export function Home() {
    const location = useLocation()

    useEffect(() => {

        if (location.hash) {
            const sectionId = location.hash.replace('#', '')
            const section = document.getElementById(sectionId)

            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        }

    }, [location])

    return (
        <main className={styles.homeContainer}>
            <FirstScreen />
            <WhoAreWe />
            <OurServices />
            <BusinessNews />
            <ContactUs />
        </main>
    )
}