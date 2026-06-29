import { Post } from "./crudcrud";


export const mockPosts: Post[] = [
    {
        _id: "1",
        title: "API offline",
        content: "Se está vendo este post, não se preocupe! É só a API do CRUDCRUD que venceu. Voltarei em breve!",
        slug: "api-offline",
        author: "Admin",
        publishedAt: new Date().toISOString(),
    },
];