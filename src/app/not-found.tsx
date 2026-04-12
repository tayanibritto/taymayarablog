import styles from './main.module.css';
import Image from 'next/image';

export default function NotFound() {
    return (
        <main className={styles.main}>

            <Image src="/not-found.png" alt="Página não encontrada" width={200} height={200} className={styles.img} />

            <h2 className={styles.h2}>Página não encontrada</h2>

            <p className={styles.message}>A página que você tentou acessar não existe.</p>

        </main>
    );
}