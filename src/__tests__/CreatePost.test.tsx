import { CreatePost } from "@/src/components/CreatePost";
import { render, screen } from "@testing-library/react";

describe("CreatePost", () => {
    it("verifica se o componente CreatePost é renderizado corretamente", () => {
        render(<CreatePost onPostCreated={() => {}} />);

        expect(screen.getByPlaceholderText("Título")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Autor")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Conteúdo")).toBeInTheDocument();
    });
});