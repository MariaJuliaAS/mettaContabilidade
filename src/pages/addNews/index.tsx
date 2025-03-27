import styles from '../../styles/addNews.module.css';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import { toast } from 'react-toastify';

interface NewsProps {
    title: string;
    news: string;
}

export function AddNews() {
    const [newsInput, setNewsInput] = useState<NewsProps>({
        title: "",
        news: ""
    })

    async function handleAddNews(event: React.FormEvent) {
        event.preventDefault()

        await addDoc(collection(db, "news"), {
            title: newsInput.title,
            news: newsInput.news,
            publicationDate: String(new Date())
        })
            .then(() => {
                toast.success("Noticia adicionada com sucesso!")
                setNewsInput({
                    title: "",
                    news: ""
                })
            })
            .catch((error) => {
                console.log("erro ao adicionar tarefa, " + error)
            })
    }


    return (
        <main className={styles.addNewsFormContainer}>
            <section className={styles.addNewsContent}>

                <h1>Adicionar notícia</h1>

                <form className={styles.form} onSubmit={handleAddNews}>
                    <input
                        type="text"
                        placeholder='Título da notícia'
                        value={newsInput?.title}
                        onChange={(e) => setNewsInput(prev => ({ ...prev, title: e.target.value }))}
                        required
                    />
                    <textarea
                        name="news"
                        id="news"
                        rows={10}
                        cols={50}
                        placeholder='Notícia'
                        value={newsInput?.news}
                        onChange={(e) => setNewsInput(prev => ({ ...prev, news: e.target.value }))}
                        required
                    />
                    <button type='submit'>Publicar notícia</button>
                </form>

            </section>
        </main>
    )
}