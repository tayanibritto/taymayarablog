"use client";

import { CreatePost } from "@/src/components/CreatePost";
import pageStyles from './page.module.css';
import styles from '../../global.module.css';
import Link from "next/link";
import { useState } from "react";

export default function NewArticle() {

    const [createdSlug, setCreatedSlug] = useState<string | null>(null); // Estado para armazenar o slug do post criado

    return (
        <main className={styles.main}>
            <div className={styles.container__link}>

                <Link href="/" className={styles.link}>
                    ← Voltar
                </Link>

            </div>

            <h1 className={styles.title}>Publicar novo artigo</h1>

            {/* Exibe mensagem de sucesso depois que o post for criado */}
            {createdSlug && (
                <p className={pageStyles.success}>
                    Artigo publicado! <Link href={`/artigos/${createdSlug}`} className={styles.link}>Clique aqui para ler</Link>.
                </p>
            )}

            <CreatePost onPostCreated={setCreatedSlug}/>

        </main>
    );
}