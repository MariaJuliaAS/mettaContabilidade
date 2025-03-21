import styles from '../../../styles/businessNews.module.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../services/firebaseConnection';
import { useNavigate } from 'react-router-dom';

interface NewsProps {
    title: string,
    news: string,
    publicationDate: string,
    docId: string;
}

export function BusinessNews() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    })
    const navigate = useNavigate()
    const [news, setNews] = useState<NewsProps[]>()

    useEffect(() => {

        async function verifyNews() {

            onSnapshot(collection(db, "news"), (snapshot) => {
                let list: NewsProps[] = []

                snapshot.forEach((item) => {
                    list.push({
                        title: item.data().title,
                        news: item.data().news,
                        publicationDate: item.data().publicationDate,
                        docId: item.id
                    })
                })

                setNews(list)

            })

        }

        verifyNews()

    }, [])

    function formatDate(dateString: string): string {
        const date = new Date(dateString)

        return `Publicado em ${date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        })}`
    }

    return (
        <section className={styles.businessNewsContainer} id='businessNews'>

            <motion.div className={styles.businessNewsContent}
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                transition={{ duration: 0.8 }}
            >

                {news?.length === 0 ? (
                    <div className={styles.noNews}>
                        <h1>Novas notícias aparecerão aqui!</h1>
                    </div>
                ) :
                    <>
                        <div className={styles.businessNewsHeader}>
                            <h1>Notícias empresariais</h1>

                            <div className={styles.btn}>
                                <a href="#">Mais notícias</a>
                            </div>

                        </div>

                        <div className={styles.newsArea}>

                            {news?.slice(0, 3).map((item, index) => (
                                <div className={styles.news} key={index}>
                                    <h1>{item.title}</h1>
                                    <span>{formatDate(item.publicationDate)}</span>
                                    <p>{item.news}</p>
                                    <button onClick={() => navigate(`/news/${item.docId}`)}>Saiba mais</button>
                                </div>
                            ))}

                        </div>
                    </>

                }

            </motion.div>


        </section>
    )
}