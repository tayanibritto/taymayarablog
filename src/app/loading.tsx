import styles from './main.module.css';
import Image from 'next/image';

export default function Loading() {
    return (
        <main className={styles.main}>

            <Image src="/loading.gif" alt="Carregando" width={200} height={200} className={styles.img} unoptimized />

            <p className={styles.message}>Carregando...</p>

        </main>
    );
}