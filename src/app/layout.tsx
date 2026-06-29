import { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from './global.module.css';

export const metadata: Metadata ={
    title: "Tayani Mayara Blog",
    description: "Blog pessoal de Tayani Mayara, onde compartilho minhas experiências, pensamentos e aprendizados sobre tecnologia, desenvolvimento web e muito mais. Bem-vindo ao meu espaço de escrita e reflexão!"
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className={styles.globalFont}>
                <Header />
                    {children}
                <Footer />
            </body>
        </html>
    );
}