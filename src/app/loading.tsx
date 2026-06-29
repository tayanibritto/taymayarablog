import styles from './main.module.css';
import global from './global.module.css';
import Image from 'next/image';

export default function Loading() {
    return (
        <main className={global.main}>

            <Image src="/loading.webp" alt="Carregando" width={200} height={200} className={styles.img} unoptimized />

            <p className={styles.message}>Carregando...</p>

        </main>
    );
}