import styles from '../../styles/whoAreWe.module.css';
import logoWhoAreWe from '../../assets/logoNaoCortada.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import iconWpp from '../../assets/icons8-whatsapp-48.png';

export function WhoAreWe() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5
    })

    return (
        <section className={styles.whoAreWeContainer} id='whoAreWe'>

            <motion.div className={styles.whoAreWeContetn}
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                transition={{ duration: 0.8 }}
            >
                <div>
                    <div className={styles.textWhoAreWe}>
                        <h1>Quem nós somos?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut elit in elit lobortis bibendum vel vitae turpis. Aenean volutpat lorem non
                            dictum aliquet. Pellentesque sit amet nisl id lectus placerat sodales. Sed dignissim volutpat orci vulputate fringilla. Pellentesque id erat
                            lacinia, bibendum quam id, placerat sapien. Vestibulum suscipit quam sit amet tortor molestie, in blandit dolor convallis. Sed pharetra
                            vestibulum dui, sit amet placerat erat hendrerit placerat. Fusce blandit dapibus mi, in efficitur metus condimentum in. Nam vestibulum commodo
                            aliquam. Ut in bibendum turpis. Fusce vitae aliquam libero, eu mattis quam.</p>
                    </div>

                    <div className={styles.btnWpp}>
                        <img src={iconWpp} alt="icon whatsapp" />
                        <a href='https://api.whatsapp.com/send/?phone=5584999199217&text&type=phone_number&app_absent=0' target='_blank'>Fale conosco no Whatsapp</a>
                    </div>
                </div>


            </motion.div>

            <motion.div className={styles.logoWhoAreWe}
                ref={ref}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                transition={{ duration: 0.8 }}
            >
                <img src={logoWhoAreWe} alt="Logo" />
            </motion.div>

        </section>
    )
}