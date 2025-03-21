import { useParams } from "react-router-dom";
import { db } from "../../services/firebaseConnection";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import styles from "../../styles/news.module.css";
import { FaLongArrowAltLeft } from "react-icons/fa";

interface NewsProps {
    title: string;
    news: string;
    publicationDate: string;
}

export function News() {
    const { id } = useParams<{ id: string }>();
    const [news, setNews] = useState<NewsProps | null>()

    useEffect(() => {

        async function getNews() {
            if (!id) {
                console.log("Id não encontrado")
                return;
            }

            const newsRef = doc(db, "news", id)

            await getDoc(newsRef)

                .then((snapshot) => {
                    const data = snapshot.data();
                    setNews({
                        title: data?.title || "Nenhum título encontrado",
                        news: data?.news || "Nenhuma notícia encontrada",
                        publicationDate: data?.publicationDate || "",
                    })
                })
                .catch((error) => {
                    console.log("Erro ao buscar notícia: " + error)
                })

        }

        getNews()

    }, [])

    function formatDate(dateString: string | any): string {
        const date = new Date(dateString)

        return `Publicado em ${date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        })}`
    }


    return (
        <main className={styles.newsContainer}>
            <section className={styles.newsContent}>
                <h1>{news?.title}</h1>
                <span>{formatDate(news?.publicationDate)}</span>
                <p>{news?.news}</p>

                <div className={styles.btn}>
                    <FaLongArrowAltLeft size={25} color="#fff" />
                    <button>Voltar para as notícias</button>
                </div>
            </section>
        </main>
    )
}