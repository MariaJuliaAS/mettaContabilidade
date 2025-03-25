import styles from '../../../styles/contactUs.module.css';
import timerImg from '../../../assets/timer.png';
import taxImg from '../../../assets/tax.png';
import barChartImg from '../../../assets/bar-chart.png';
import wppImg from '../../../assets/icons8-whatsapp-48.png';
import instagramImg from '../../../assets/instagram.png';
import emailImg from '../../../assets/gmail.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function ContactUs() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4
    })

    return (
        <section className={styles.contactUsContainer} id='contactUs'>

            <div className={styles.contactUsContent}>

                <motion.div className={styles.whyHireUsArea}
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.whyHireUsText}>

                        <h1>Por que nos contratar?</h1>

                        <div className={styles.imgArea}>
                            <div className={styles.img}>
                                <img src={timerImg} alt="Foto timer" />
                                <span>Otimização de tempo</span>
                            </div>

                            <div className={styles.img}>
                                <img src={taxImg} alt="Foto taxa" />
                                <span>Cumprimento das obrigações fiscais</span>
                            </div>

                            <div className={styles.img}>
                                <img src={barChartImg} alt="Foto taxa" />
                                <span>Planejamento financeiro</span>
                            </div>
                        </div>
                    </div>

                </motion.div>

                <div className={styles.contactUsArea}>
                    <motion.div className={styles.contactUsText}
                        ref={ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h1>Fale conosco</h1>

                        <div className={styles.btnArea}>
                            <img src={wppImg} alt="icone whatsapp" />
                            <a href="https://api.whatsapp.com/send/?phone=5584999199217&text&type=phone_number&app_absent=0" target='_blank'>Clique aqui e nos envie uma mensagem pelo whatsapp</a>
                        </div>

                        <div className={styles.btnArea}>
                            <img src={instagramImg} alt="icone instagram" />
                            <a href="https://www.instagram.com/metta_contabilidade_/" target='_blank'>Clique aqui e nos envie uma mensagem pelo instagram</a>
                        </div>

                        <div className={styles.btnArea}>
                            <img src={emailImg} alt="icone email" />
                            <span>Ou nos envie um email: metta_contabilidade_@outlook.com</span>
                        </div>

                    </motion.div>
                </div>

            </div>

        </section>
    )
}