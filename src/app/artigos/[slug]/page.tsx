import { getPosts } from "@/src/lib/crudcrud";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import pageStyles from './page.module.css';
import styles from '../../global.module.css';

export const dynamic = "force-static"; // Gera páginas estáticas para cada artigo com base no slug

type Params = {
    slug: string;
};

// Geração de rotas estáticas para cada artigo com base no slug
export async function generateStaticParams() {
    const posts = await getPosts();

    return posts.map(post => ({
        slug: post.slug,
    }));
}

// SEO dinâmico para cada artigo
export async function generateMetadata({
    params, 
}: {
    params: Promise<Params>;
}): Promise<Metadata> {
    const { slug } = await params;

    const posts = await getPosts();

    const post = posts.find(p => p.slug === slug);

    if (!post) {
        return {
            title: "Artigo não encontrado",
        };
    }

    return {
        title: post.title,
        description: `${post.title}, escrito por ${post.author} - ${post.content.substring(0, 150)}...`, // Primeiros 150 caracteres do artigo
    };
}

export default async function PostPage({
    params,
}: {
    params: Promise<Params>;
}) {
    const { slug } = await params;

    const posts = await getPosts();

    const post = posts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className={styles.main}>

            <div className={styles.container__link}>
                <Link href="/" className={styles.link}>
                    ← Voltar
                </Link>
            </div>

            <h1 className={styles.title}>{post.title}</h1>

            <p className={pageStyles.signature}>Por {post.author}, em {new Date(post.publishedAt).toLocaleDateString("pt-BR")}</p>

            <article>
                <p className={styles.text}>{post.content}</p>
            </article>
        </main>
    );
}