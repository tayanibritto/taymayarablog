const BASE_URL = process.env.NEXT_PUBLIC_CRUD_API_URL!;
const TOKEN = process.env.NEXT_PUBLIC_CRUD_API_KEY!;
const COLLECTION = process.env.NEXT_PUBLIC_CRUD_API_COLLECTION!;

export type Post = {
    _id?: string;
    title: string;
    content: string;
    slug: string; // Para criação de URLs melhores
    author: string;
    publishedAt: string;
};

function getApiUrl() {
    return `${BASE_URL}/${TOKEN}/${COLLECTION}`;
}

export async function getPosts(): Promise<Post[]> {

    const res = await fetch(getApiUrl(), {
        cache: "no-store", // Evita cache para garantir dados atualizados
    });

    if (!res.ok) {
        throw new Error("Erro ao buscar posts");
    }

    return res.json();

}

export async function createPost(post: Post): Promise<Post> {
    const res = await fetch (getApiUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
    });

    if (!res.ok) {
        throw new Error("Erro ao criar post");
    }

    return res.json();
}