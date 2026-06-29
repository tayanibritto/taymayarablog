import global from './global.module.css';
import styles from './main.module.css'

export default function Loading() {
    return (
        <main className={global.main}>

            <h2 className={styles.h2}>Artigos:</h2>

            <p className={global.text}>
                Clique no título de um artigo para visualizá-lo:
            </p>

            <ul className={styles.ul}>
                {Array.from({ length: 3 }).map((_, i) => (
                    <li key={i}>
                        <p className={styles.message}>
                            Carregando artigos...
                        </p>
                    </li>
                ))}

            </ul>

        </main>
    );
}