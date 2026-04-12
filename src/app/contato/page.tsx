import Link from "next/link";
import styles from './page.module.css';

export const dynamic = "force-static"; // Gera páginas estáticas

export default function Contato() {
    return (
        <main className={styles.main}>

            <div className={styles.link__container}>

                <Link href="/" className={styles.link}>
                    ← Voltar
                </Link>

            </div>

            <h1 className={styles.title}>Contato</h1>

            <p className={styles.text}>
                Se você deseja entrar em contato comigo, seja para tirar dúvidas, sugerir temas para artigos ou apenas dizer oi, fique à vontade para preencher o formulário abaixo:
            </p>

            <form className={styles.form}>

                <input
                    type="text"
                    placeholder="Seu nome"
                    aria-label="Escrever nome"
                    className={styles.form__input}
                />
                <input
                    type="email"
                    placeholder="Seu email"
                    aria-label="Escrever email"
                    className={styles.form__input}
                />
                <textarea
                    placeholder="Sua mensagem" 
                    aria-label="Escrever mensagem"
                    className={styles.form__input}
                />

                <button
                    type="submit"
                    className={styles.form__button}
                >
                    Enviar
                </button>

            </form>

        </main>
    )
}