import global from './global.module.css';
import Image from 'next/image';

export default function NotFound() {
    return (
        <main className={global.main} style={{
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }}>

            <Image src="/not-found.webp" alt="Página não encontrada" width={200} height={200} className={global.img} />

            <h2 className={global.h2}>Página não encontrada</h2>

            <p className={global.message}>A página que você tentou acessar não existe.</p>

        </main>
    );
}