"use client";

import slugify from "slugify";
import { useState } from "react";
import { createPost } from "@/src/lib/crudcrud";
import styles from './CreatePost.module.css';

type CreatePostProps = {
    onPostCreated: (slug: string) => void; // Callback de notificação sobre a criação de um novo post
}

// Componente para criar um novo post (Client Component)
export function CreatePost({ onPostCreated }: CreatePostProps) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit() {
        if (!title || !content || !author) return;

        const slug = slugify(title, {
            lower: true, // Converte para minúsculas
            strict: true, // Remove caracteres especiais
        })

        setLoading(true);
        await createPost({
            title,
            content,
            slug,
            author,
            publishedAt: new Date().toISOString(),
        });

        // Limpa o formulário após criar o post
        setTitle("");
        setContent("");
        setAuthor("");
        setLoading(false);

        // Avisa a página que o post foi criado
        onPostCreated(slug);
    }

    return (
        <section>

            <h2 className={styles.subtitle}>Novo Post</h2>

            <form className={styles.form} onSubmit={e => e.preventDefault()}>

                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    aria-label="Escrever título"
                    className={styles.form__input}
                />

                <input
                    type="text"
                    placeholder="Autor"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    aria-label="Escrever nome do autor"
                    className={styles.form__input}
                />

                <textarea
                    placeholder="Conteúdo"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    aria-label="Escrever conteúdo"
                    className={styles.form__input}
                />

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    aria-label="Publicar post"
                    className={styles.form__button}
                >
                    {loading ? "Publicando..." : "Publicar"}
                </button>

            </form>

        </section>
    );
}