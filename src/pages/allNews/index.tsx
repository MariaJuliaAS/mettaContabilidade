import styles from "../../styles/allNews.module.css";
import { useState, useEffect } from "react";
import { db } from "../../services/firebaseConnection";
import { collection, getDocs } from "firebase/firestore";
import { formatDate } from "../../utils/formatDate";
import { useNavigate } from "react-router-dom";

interface NewsProps {
    title: string;
    news: string;
    publicationDate: string;
    docId: string
}

export function AllNews() {
    const navigate = useNavigate()
    const [news, setNews] = useState<NewsProps[]>([])

    useEffect(() => {

        async function getNews() {

            await getDocs(collection(db, "news"))
                .then((snapshot) => {
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

        getNews()

    }, [])

    return (
        <main className={styles.allNewsContainer}>
            <section className={styles.allNewsContent}>
                <h1>Todas as notícias</h1>
                {news.map((item) => (
                    <div className={styles.newsArea}>
                        <h1>{item.title}</h1>
                        <span>{formatDate(item.publicationDate)}</span>
                        <p>{item.news}</p>
                        <button onClick={() => navigate(`/news/${item.docId}`)}>Saiba mais</button>
                    </div>
                ))}
            </section>
        </main>
    )
}