import Link from 'next/link';
import styles from '../global.module.css';

export const dynamic = "force-static"; // Gera páginas estáticas

export default function Sobre() {
    return (
        <main className={styles.main}>

            <div className={styles.container__link}>

                <Link href="/" className={styles.link}>
                    ← Voltar
                </Link>

            </div>

            <h1 className={styles.title}>Sobre mim</h1>

            <p className={styles.text}>

                Olá! Sou Tayani Mayara, uma entusiasta de tecnologia e apaixonada por desenvolvimento web. Este blog é um espaço onde compartilho meus aprendizados, projetos e experiências na área de programação. Aqui você encontrará artigos sobre JavaScript, React, Next.js e muito mais. Espero que meu conteúdo possa inspirar e ajudar outros desenvolvedores em sua jornada!
            
            </p>

        </main>
    );
}

