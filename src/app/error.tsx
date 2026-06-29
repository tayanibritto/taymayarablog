"use client";

import styles from './main.module.css';
import global from './global.module.css';
import Image from 'next/image';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;}) {
    return (
        <main className={global.main}>

            <h2 className={styles.h2}>Ops... Ocorreu um erro!</h2>

            <Image src="/erro.png" alt="Erro!" width={200} height={200} className={styles.img} />

            <p className={styles.message}>{error.message}</p>

            <button
                onClick={reset}
                aria-label="Tentar novamente"
                className={styles.button}
            >
                Tentar novamente
            </button>
        </main>
    );
}