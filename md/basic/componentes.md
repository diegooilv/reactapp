**Navegação**

- [Introdução aos Componentes](#introdução-aos-componentes)
- [Criação de Componentes Funcionais com TSX](#criação-de-componentes-funcionais-com-tsx)
- [JSX/TSX: Sintaxe e Poderes](#jsxtsx-sintaxe-e-poderes)
- [Props e Tipagem: Comunicação Entre Componentes](#props-e-tipagem-comunicação-entre-componentes)
- [Composição de Componentes](#composição-de-componentes)
- [Melhores Práticas](#melhores-práticas)
- [Referências e Leituras Complementares](#referências-e-leituras-complementares)

---

## Introdução aos Componentes

Componentes são as peças fundamentais de qualquer aplicação React com TypeScript. Eles representam trechos de interface de usuário reutilizáveis. Cada componente recebe dados tipados de entrada e retorna elementos React que descrevem o que deve aparecer na tela.

## Criação de Componentes Funcionais com TSX

Em React+TypeScript, componentes funcionais usam arquivos `.tsx` e incluem tipagem para props.

```tsx
import React from "react";

interface SaudacaoProps {
  nome: string;
}

export function Saudacao({ nome }: SaudacaoProps): JSX.Element {
  return (
    <div>
      <h1>Olá, {nome}!</h1>
    </div>
  );
}
```

Neste exemplo, definimos uma interface para as props e retornamos um elemento tipado como `JSX.Element`.

## JSX/TSX: Sintaxe e Poderes

TSX é a extensão de JSX para TypeScript. Apesar de parecer HTML, é transformado em chamadas `React.createElement`. Com TSX, você ganha autocompletar e verificação de tipos.

- Interpolação de expressões JavaScript/TypeScript usando chaves (`{}`).
- Atributos seguem camelCase (por exemplo, `className`).

```tsx
const nome: string = "Diego";
const elemento = <h2>Bem-vindo, {nome}!</h2>;
```

Expressões em TSX são avaliadas antes da renderização, permitindo lógica direta na marcação.

## Props e Tipagem: Comunicação Entre Componentes

Props (propriedades) em TypeScript são tipadas via interfaces ou tipos. Elas ficam imutáveis dentro do componente.

```tsx
interface Usuario {
  nome: string;
  email: string;
}

interface PerfilProps {
  usuario: Usuario;
}

export function Perfil({ usuario }: PerfilProps): JSX.Element {
  return (
    <div>
      <p>Nome: {usuario.nome}</p>
      <p>Email: {usuario.email}</p>
    </div>
  );
}

// Uso em App.tsx:
// <Perfil usuario={{ nome: 'Ana', email: 'ana@exemplo.com' }} />
```

Quando as props mudam, o React re-renderiza o componente automaticamente.

## Composição de Componentes

Componentes podem conter outros componentes, formando hierarquias modulares e facilitando a manutenção.

```tsx
interface Item {
  id: number;
  texto: string;
}

interface TodoListProps {
  itens: Item[];
}

export function TodoList({ itens }: TodoListProps): JSX.Element {
  return (
    <ul>
      {itens.map((item) => (
        <li key={item.id}>{item.texto}</li>
      ))}
    </ul>
  );
}
```

Separar em componentes menores mantém o código mais limpo e reutilizável.

## Melhores Práticas

- Use `PascalCase` para nomes de componentes.
- Defina interfaces ou tipos para props e estado.
- Mantenha componentes focados em uma única responsabilidade.
- Extraia lógica complexa para hooks personalizados.
- Nunca modifique props ou estado diretamente; utilize funções de atualização.

## Referências e Leituras Complementares

- Documentação oficial do React: [https://reactjs.org/docs/components-and-props.html](https://reactjs.org/docs/components-and-props.html)
- Guia de JSX: [https://reactjs.org/docs/introducing-jsx.html](https://reactjs.org/docs/introducing-jsx.html)
- React + TypeScript Cheatsheet: [https://react-typescript-cheatsheet.netlify.app/](https://react-typescript-cheatsheet.netlify.app/)
- Princípios de composição em React: [https://reactjs.org/docs/composition-vs-inheritance.html](https://reactjs.org/docs/composition-vs-inheritance.html)
