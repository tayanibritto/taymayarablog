import Link from "next/link";
import pageStyles from './page.module.css';
import styles from '../global.module.css';

export const dynamic = "force-static"; // Gera páginas estáticas

export default function Contato() {
    return (
        <main className={styles.main}>

            <div className={styles.container__link}>

                <Link href="/" className={styles.link}>
                    ← Voltar
                </Link>

            </div>

            <h1 className={styles.title}>Contato</h1>

            <p className={styles.text}>
                Se você deseja entrar em contato comigo, seja para tirar dúvidas, sugerir temas para artigos ou apenas dizer oi, fique à vontade para preencher o formulário abaixo:
            </p>

            <form className={pageStyles.form}>

                <input
                    type="text"
                    placeholder="Seu nome"
                    aria-label="Escrever nome"
                    className={pageStyles.form__input}
                />
                <input
                    type="email"
                    placeholder="Seu email"
                    aria-label="Escrever email"
                    className={pageStyles.form__input}
                />
                <textarea
                    placeholder="Sua mensagem" 
                    aria-label="Escrever mensagem"
                    className={pageStyles.form__input}
                />

                <button
                    type="submit"
                    className={pageStyles.form__button}
                >
                    Enviar
                </button>

            </form>

        </main>
    )
}