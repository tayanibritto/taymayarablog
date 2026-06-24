import { Post } from "./crudcrud";


export const mockPosts: Post[] = [
    {
        _id: "1",
        title: "API offline",
        content: "API não disponível no momento.",
        slug: "api-offline",
        author: "Admin",
        publishedAt: new Date().toISOString(),
    },
];