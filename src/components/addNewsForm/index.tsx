import styles from '../../styles/addNewsForm.module.css';

export function AddNewsForm() {
    return (
        <section className={styles.addNewsFormContainer}>
            <div className={styles.addNewsContent}>
                <h1>Adicionar notícia</h1>

                <form className={styles.form}>
                    <input
                        type="text"
                        placeholder='Título da notícia'
                    />
                    <textarea
                        name="news"
                        id="news"
                        rows={10}
                        cols={50}
                        placeholder='Notícia'
                    />
                    <button>Publicar notícia</button>
                </form>
            </div>
        </section>
    )
}