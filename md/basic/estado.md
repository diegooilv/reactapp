**Navegação**

- [Compreendendo o Estado no React](#compreendendo-o-estado-no-react)
- [useState com TypeScript](#usestate-com-typescript)
- [Mutabilidade e Imutabilidade](#mutabilidade-e-imutabilidade)
- [useReducer para Estados Complexos](#usereducer-para-estados-complexos)
- [Elevação de Estado (Lifting State Up)](#elevação-de-estado-lifting-state-up)
- [Melhores Práticas para Gerenciamento de Estado](#melhores-práticas-para-gerenciamento-de-estado)
- [Referências e Leituras Complementares](#referências-e-leituras-complementares)

---

## Compreendendo o Estado no React

O estado é um objeto que representa dados mutáveis de um componente. Sempre que o estado muda, o React re-renderiza o componente para refletir as novas informações na interface de usuário. Diferente de props, o estado é gerenciado internamente e pode ser atualizado pelo próprio componente.

## useState com TypeScript

O hook useState é a forma mais simples de adicionar estado a componentes funcionais. Com TypeScript, você especifica o tipo do estado ao chamar o hook.

```tsx
import React, { useState } from "react";

export function Contador(): JSX.Element {
  const [valor, setValor] = useState<number>(0);

  const incrementar = (): void => {
    setValor((prev) => prev + 1);
  };

  return (
    <div>
      <p>Contagem: {valor}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
```

A tipagem `<number>` garante que `valor` sempre será um número, evitando atribuição de outros tipos.

## Mutabilidade e Imutabilidade

Manter o estado imutável é fundamental para que o React detecte mudanças corretamente. Nunca altere diretamente o objeto de estado; use sempre a função de atualização retornada pelo hook.

```tsx
// Exemplo incorreto
const obj = { nome: "Ana" };
obj.nome = "Maria"; // não faz o React re-renderizar

// Exemplo correto
const [pessoa, setPessoa] = useState<{ nome: string }>({ nome: "Ana" });
setPessoa((prev) => ({ ...prev, nome: "Maria" }));
```

## useReducer para Estados Complexos

Para lógica de estado mais elaborada ou vários campos interdependentes, o hook useReducer oferece um padrão inspirado em Redux.

```tsx
import React, { useReducer } from "react";

interface EstadoForm {
  nome: string;
  email: string;
}

type AcaoForm =
  | { type: "SET_NOME"; payload: string }
  | { type: "SET_EMAIL"; payload: string };

function reducer(state: EstadoForm, action: AcaoForm): EstadoForm {
  switch (action.type) {
    case "SET_NOME":
      return { ...state, nome: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

export function Formulario(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, { nome: "", email: "" });

  return (
    <form>
      <input
        value={state.nome}
        onChange={(e) =>
          dispatch({ type: "SET_NOME", payload: e.target.value })
        }
        placeholder="Nome"
      />
      <input
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
        placeholder="Email"
      />
    </form>
  );
}
```

## Elevação de Estado (Lifting State Up)

Quando dois ou mais componentes precisam compartilhar o mesmo dado, o estado deve ser movido para o componente ancestral mais próximo. Esse padrão é conhecido como _lifting state up_.

```tsx
function ComponentePai(): JSX.Element {
  const [texto, setTexto] = useState<string>("");

  return (
    <div>
      <CampoEntrada texto={texto} onChange={setTexto} />
      <Exibicao texto={texto} />
    </div>
  );
}

interface CampoProps {
  texto: string;
  onChange(texto: string): void;
}
function CampoEntrada({ texto, onChange }: CampoProps) {
  return <input value={texto} onChange={(e) => onChange(e.target.value)} />;
}

interface ExibicaoProps {
  texto: string;
}
function Exibicao({ texto }: ExibicaoProps) {
  return <p>Você digitou: {texto}</p>;
}
```

## Melhores Práticas para Gerenciamento de Estado

- Evitar estados duplicados em componentes irmãos.
- Preferir `useState` para estados simples e `useReducer` para lógica complexa.
- Remover estado desnecessário: derive valores sempre que possível.
- Usar _custom hooks_ para agrupar lógica de estado reutilizável.

## Referências e Leituras Complementares

- Documentação useState: [https://reactjs.org/docs/hooks-state.html](https://reactjs.org/docs/hooks-state.html)
- Documentação useReducer: [https://reactjs.org/docs/hooks-reference.html#usereducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
- Padrão Lifting State Up: [https://reactjs.org/docs/lifting-state-up.html](https://reactjs.org/docs/lifting-state-up.html)
