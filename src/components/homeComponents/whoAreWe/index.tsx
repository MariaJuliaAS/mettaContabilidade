import styles from '../../../styles/whoAreWe.module.css';
import logoWhoAreWe from '../../../assets/logoRedonda.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import iconWpp from '../../../assets/icons8-whatsapp-48.png';

export function WhoAreWe() {
    const { ref: textRef, inView: textInView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    const { ref: logoRef, inView: logoInView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    return (
        <section className={styles.whoAreWeContainer} id='whoAreWe'>

            <motion.div className={styles.whoAreWeContetn}
                ref={textRef}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : -100 }}
                transition={{ duration: 0.8 }}
            >
                <div>
                    <div className={styles.textWhoAreWe}>
                        <h1>Quem nós somos?</h1>
                        <p>
                            A <strong>Metta Contabilidade</strong> é um escritório contábil digital, localizado em Baraúna, que oferece soluções
                            especializadas para empresas, autônomos e profissionais liberais. Nosso objetivo é simplificar a gestão contábil
                            e financeira dos nossos clientes, proporcionando atendimento ágil e eficiente, sem a necessidade de um
                            escritório físico.
                        </p>
                        <p>
                            Com uma equipe experiente e qualificada, trabalhamos de forma online e personalizada, oferecendo serviços que vão
                            desde a abertura de empresas até consultorias especializadas, sempre com foco na transparência e no crescimento
                            sustentável do seu negócio.
                        </p>
                    </div>

                    <div className={styles.btnWpp}>
                        <img src={iconWpp} alt="icon whatsapp" />
                        <a href='https://api.whatsapp.com/send/?phone=5584999199217&text&type=phone_number&app_absent=0' target='_blank'>Fale conosco no Whatsapp</a>
                    </div>
                </div>


            </motion.div>

            <motion.div className={styles.logoWhoAreWe}
                ref={logoRef}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: logoInView ? 1 : 0, x: logoInView ? 0 : 100 }}
                transition={{ duration: 0.8 }}
            >
                <img src={logoWhoAreWe} alt="Logo" />
            </motion.div>

        </section>
    )
}