import { mockPosts } from "./mockPosts";

const BASE_URL = process.env.NEXT_PUBLIC_CRUD_API_URL!;
const TOKEN = process.env.NEXT_PUBLIC_CRUD_API_KEY!;
const COLLECTION = process.env.NEXT_PUBLIC_CRUD_API_COLLECTION!;

export type Post = {
    _id?: string;
    title: string;
    content: string;
    slug: string;
    author: string;
    publishedAt: string;
};

function isConfigValid() {
    return BASE_URL && TOKEN && COLLECTION;
}

function getApiUrl() {
    return `${BASE_URL}/${TOKEN}/${COLLECTION}`;
}

export async function getPosts(): Promise<Post[]> {

    if (!isConfigValid()) {
        console.warn("API ausente - usando fallback.");
        return mockPosts;
    }

    try {
        const res = await fetch(getApiUrl(), {
            cache: "no-store", // Evita cache para garantir dados atualizados
        });

        if (!res.ok) {
            console.warn("Erro na API - usando fallback");
            return mockPosts;
        }

        return res.json();
    } catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.error("Erro na API: ", error);
        }
        return mockPosts;
    }

}

export async function createPost(post: Post): Promise<Post> {

    if (!isConfigValid()) {
        throw new Error("API não configurada.")
    }

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