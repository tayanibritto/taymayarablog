import Link from "next/link";
import Image from "next/image";
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.container}>

            <div className={styles.logo}>
                <Image
                    src="/logo.webp"
                    alt="Logo do Blog"
                    width={384}
                    height={256}
                    priority
                    sizes="(max-width: 768px) 150px, 384px"
                />
            </div>

            <nav className={styles.nav}>
                <Link href="/" className={styles.nav__link}>Home</Link>
                <Link href="/sobre" className={styles.nav__link}>Sobre</Link>
                <Link href="/contato" className={styles.nav__link}>Contato</Link>
                <Link href="/artigos/novo" className={styles.nav__publish}>(Usuário logado) Adicionar Novo Artigo</Link>
            </nav>

        </header>
    );
}