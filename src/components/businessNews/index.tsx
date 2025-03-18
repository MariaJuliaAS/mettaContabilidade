import styles from '../../styles/businessNews.module.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export function BusinessNews() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5
    })

    return (
        <section className={styles.businessNewsContainer} id='businessNews'>

            <motion.div className={styles.businessNewsContent}
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                transition={{ duration: 0.8 }}
            >

                <div className={styles.businessNewsHeader}>
                    <h1>Notícias empresariais</h1>

                    <div className={styles.btn}>
                        <a href="#">Mais notícias</a>
                    </div>

                </div>

                <div className={styles.newsArea}>

                    <div className={styles.news}>
                        <h1>DAS-MEI atrasado? Veja como evitar multas, perda do CNPJ e problemas com o INSS</h1>
                        <span>Publicado em 18 de março de 2025</span>
                        <p>O Microempreendedor Individual (MEI) é uma categoria empresarial simplificada que oferece benefícios e exige poucas obrigações,
                            especialmente relacionadas ao pagamento mensal do Documento de Arrecadação do...</p>
                        <a href="#">Saiba mais</a>
                    </div>

                    <div className={styles.news}>
                        <h1>DAS-MEI atrasado? Veja como evitar multas, perda do CNPJ e problemas com o INSS</h1>
                        <span>Publicado em 18 de março de 2025</span>
                        <p>O Microempreendedor Individual (MEI) é uma categoria empresarial simplificada que oferece benefícios e exige poucas obrigações,
                            especialmente relacionadas ao pagamento mensal do Documento de Arrecadação do...</p>
                        <a href="#">Saiba mais</a>
                    </div>

                    <div className={styles.news}>
                        <h1>DAS-MEI atrasado? Veja como evitar multas, perda do CNPJ e problemas com o INSS</h1>
                        <span>Publicado em 18 de março de 2025</span>
                        <p>O Microempreendedor Individual (MEI) é uma categoria empresarial simplificada que oferece benefícios e exige poucas obrigações,
                            especialmente relacionadas ao pagamento mensal do Documento de Arrecadação do...</p>
                        <a href="#">Saiba mais</a>
                    </div>

                </div>
            </motion.div>


        </section>
    )
}