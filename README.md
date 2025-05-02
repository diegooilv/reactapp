# React + TypeScript + Vite (Projeto de Estudos)

Este repositório abriga meu primeiro projeto de estudos com React, utilizando TypeScript e Vite para proporcionar um ambiente leve e rápido de desenvolvimento.

## Visão Geral

Durante este projeto, exploro os fundamentos de React e TypeScript, incluindo:

- Criação de componentes funcionais em TSX
- Gerenciamento de estado com `useState` e `useReducer`
- Criação e tipagem de props
- Manipulação de eventos sintéticos em React
- Organização de rotas (planejado para etapas futuras)
- Boas práticas de tipagem e estrutura de pastas

## Estrutura do Projeto

```bash
reactapp/
├── public/                # Arquivos estáticos (index.html, favicon, etc.)
├── src/                   # Código fonte da aplicação
│   ├── assets/            # Imagens e fontes
│   ├── components/        # Componentes React em TSX
│   ├── pages/             # Páginas (para uso com React Router)
│   ├── App.tsx            # Componente raiz
│   ├── main.tsx           # Ponto de entrada (renderização)
│   ├── index.css          # Estilos globais
│   └── vite.config.ts     # Configuração do Vite
├── .gitignore             # Arquivos ignorados pelo Git
├── package.json           # Dependências e scripts do NPM
├── tsconfig.json          # Configurações do TypeScript
└── README.md              # Documentação deste projeto
```

## Como Executar

1. Instalar dependências:

   ```bash
   npm install
   ```

2. Iniciar o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Acessar a aplicação em `http://localhost:3000`.

## Scripts Úteis

- **`npm run dev`**: Inicializa o servidor de desenvolvimento com HMR.
- **`npm run build`**: Gera a versão de produção na pasta `dist`.
- **`npm run preview`**: Servidor local para testar o build de produção.

## Configuração do ESLint (opcional)

Para garantir qualidade de código, este projeto pode usar regras de lint com ESLint e TypeScript:

```js
// Exemplo de eslint.config.js
import tseslint from "@typescript-eslint/experimental-utils";
export default tseslint.config({
  extends: [...tseslint.configs.recommendedTypeChecked],
  languageOptions: {
    parserOptions: { project: ["./tsconfig.json"] },
  },
});
```

## Próximos Passos

- Implementar navegação com React Router
- Explorar hooks avançados e context API
- Adicionar testes unitários com Jest

---

> Projeto criado para fins de estudo, sem objetivo de produção. Todos os conceitos e implementações são experimentais e parte do meu aprendizado de React e TypeScript.
