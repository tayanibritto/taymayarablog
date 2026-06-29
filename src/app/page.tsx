import Link from "next/link";
import { getPosts } from "../lib/crudcrud";
import pageStyles from './main.module.css';
import styles from './global.module.css'

export const dynamic = "force-dynamic"; // Força a renderização dinâmica para sempre mostrar os posts atualizados

export default async function Home() {
    const posts = await getPosts();

    // Ordena os posts do mais recente para o mais antigo
    const sortedPosts = posts.sort(
        (a, b) =>
            new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    );

    return (
        <main className={styles.main}>

            <h2 className={styles.h2}>Artigos:</h2>

            <p className={styles.text}>Clique no título de um artigo para visualizá-lo:</p>

            {/* Lista de posts (Server Component) */}
            <ul className={pageStyles.ul}>
                {sortedPosts.map(post => (
                    <li key={post._id}>

                        <Link href={`/artigos/${post.slug}`} className={pageStyles.title}>
                            {post.title}
                        </Link>

                        <p className={styles.signature}>Por {post.author}, em {new Date(post.publishedAt).toLocaleDateString("pt-BR")}</p>

                        <p className={styles.text}>{post.content.substring(0, 200)}...</p>

                        <hr className={pageStyles.divider} />

                    </li>

                ))}
            </ul>
        </main>
    );
}