"use client";

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

            <h2 className={global.h2}>Ops... Ocorreu um erro!</h2>

            <Image src="/erro.webp" alt="Erro!" width={200} height={200} className={global.img} />

            <p className={global.message}>{error.message}</p>

            <button
                onClick={reset}
                aria-label="Tentar novamente"
                className={global.button}
            >
                Tentar novamente
            </button>
        </main>
    );
}