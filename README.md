Título: Blog Pessoal

Link: https://taymayarablog.vercel.app/

Descrição: Aplicação de blog onde os artigos são carregados dinamicamente com rotas personalizadas, dados buscados via API (neste caso, a simulação do crudcrud) e aplicação de boas práticas de SEO utilizando as funcionalidades do App Router.

O projeto utiliza GitHub Actions para:

- Validação de código (ESLint);
- Testes automatizados (Jest);
- Build da aplicação (Next.js);
- Deploy automático no Vercel (CD).

Fluxo: push -> CI -> CD -> deploy

Tecnologias utilizadas: Next.js · TypeScript · Node.js · CSS Modules

Instalação:

Passos para clonar e rodar: git clone https://github.com/tayanibritto/taymayarablog.git · cd taymayarablog · npm install · npm run dev · copiar e colar a URL que o terminal mostrar (geralmente http://localhost:3000) · É necessário ter o Node.js instalado · É necessário gerar um link novo de API no https://crudcrud.com e adicionar em .env.local · É necessário ter acesso à Internet para que a aplicação funcione.

Estrutura do Projeto:

- public/
    - erro.png
    - loading.gif
    - logo.png
    - not-found.png
    - separador.png
- src/
    - app/
        - api/
            - route.ts
        - artigos/
            - [slug]/
                - page.module.css
                - page.tsx
            - novo/
                - page.module.css
                - page.tsx
        - contato/
            - page.module.css
            - page.tsx
        - sobre/
            - page.module.css
            - page.tsx
        - error.tsx
        - global.module.css
        - layout.tsx
        - loading.tsx
        - main.module.css
        - not-found.tsx
        - page.tsx
    - components/
        - CreatePost.module.css
        - CreatePost.tsx
        - Footer.module.css
        - Footer.tsx
        - Header.module.css
        - Header.tsx
    - lib/
        - crudcrud.ts
.gitignore
AGENTS.md
CLAUDE.md
eslint.config.mjs
next.config.ts
package-lock.json
package.json
tsconfig.json

Observações:  É necessário ter o Node.js instalado · É necessário gerar um link novo de API no https://crudcrud.com e adicionar em .env.local · É necessário ter acesso à Internet para que a aplicação funcione.
