// Teste unitário para verificar a funcionalidade do slugify

import slugify from "slugify";

describe("Slugify", () => {
    it("verifica se a conversão do título em slug ocorre corretamente", () => {
        const title = "Testando Slugify!";

        const slug = slugify(title, {
            lower: true,
            strict: true,
        });

        expect(slug).toBe("testando-slugify");
    });
});