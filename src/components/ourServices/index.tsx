import styles from '../../styles/ourServices.module.css';
import iconWpp from '../../assets/icons8-whatsapp-48.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export function OurServices() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5
    })

    return (
        <section className={styles.ourServicesContainer} id='ourServices'>

            <div className={styles.ourServicesContent}>
                <motion.div className={styles.ourServicesText}
                    ref={ref}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                    transition={{ duration: 0.8 }}>
                    <h1>Nossos serviços</h1>

                    <div className={styles.list}>
                        <ul>
                            <li>✅ Abertura, baixa e elaboração contratual de empresas (CNPJ)</li>
                            <li>✅ Consultoria e assessoria, fiscal, trabalhista, contábil e financeira</li>
                            <li>✅ MEI - Micro Empreendedor Individual</li>
                        </ul>

                        <ul>
                            <li>✅ Empregado Doméstico</li>
                            <li>✅ Consultoria financeira e previdenciária para autônomos e profissionais liberais</li>
                            <li>✅ IRPF</li>
                        </ul>
                    </div>

                    <div className={styles.btnWpp}>
                        <img src={iconWpp} alt="icon whatsapp" />
                        <a href='https://api.whatsapp.com/send/?phone=5584999199217&text&type=phone_number&app_absent=0' target='_blank'>Fale conosco no Whatsapp</a>
                    </div>

                </motion.div>
            </div>

        </section>
    )
}