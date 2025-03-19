import styles from '../../../styles/firstScreen.module.css';
import iconWpp from '../../../assets/icons8-whatsapp-48.png';
import { FaArrowDown } from "react-icons/fa6";
import { motion } from 'framer-motion';

export function FirstScreen() {
    return (
        <motion.section className={styles.firstScreenContainer} id='firstScreen'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            <h1>Metta Contabilidade</h1>
            <span>Acessoria contábil</span>

            <div className={styles.btnWpp}>
                <img src={iconWpp} alt="icon whatsapp" />
                <a href='https://api.whatsapp.com/send/?phone=5584999199217&text&type=phone_number&app_absent=0' target='_blank'>Fale conosco no Whatsapp</a>
            </div>

            <footer className={styles.footerBtn}>
                <a href='#whoAreWe'><FaArrowDown size={30} color='#333' /></a>
            </footer>

        </motion.section>
    )
}