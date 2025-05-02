**Navegação**

- [Introdução aos Eventos em React](#introdução-aos-eventos-em-react)
- [Eventos Sintéticos e Tipagem](#eventos-sintéticos-e-tipagem)
- [Eventos de Mouse e Teclado](#eventos-de-mouse-e-teclado)
- [Eventos de Formulário](#eventos-de-formulário)
- [Prevenção de Comportamento Padrão](#prevenção-de-comportamento-padrão)
- [Delegação de Eventos](#delegação-de-eventos)
- [Melhores Práticas](#melhores-práticas)
- [Referências e Leituras Complementares](#referências-e-leituras-complementares)

---

## Introdução aos Eventos em React

Em React, eventos são gerenciados através de props que começam com `on` (como `onClick` ou `onSubmit`). Esses eventos são _sintéticos_, o que significa que o React cria um sistema de gerenciamento que funciona de maneira uniforme em diferentes navegadores.

## Eventos Sintéticos e Tipagem

Os eventos em React utilizam o sistema de eventos sintéticos (`SyntheticEvent`). No TypeScript, você tipa o evento informando o tipo correto de `React.SyntheticEvent` ou tipos específicos, como `React.MouseEvent`.

```tsx
import React from "react";

export function ExemploClique(): JSX.Element {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log("Clicado!", event);
  };

  return <button onClick={handleClick}>Clique em mim</button>;
}
```

## Eventos de Mouse e Teclado

**Mouse Events**: `onClick`, `onDoubleClick`, `onMouseEnter`, `onMouseLeave`, etc.

```tsx
function MouseTracker(): JSX.Element {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>): void => {
    console.log("Mouse entrou na área");
  };

  return <div onMouseEnter={handleMouseEnter}>Passe o mouse</div>;
}
```

**Keyboard Events**: `onKeyDown`, `onKeyUp`, `onKeyPress`.

```tsx
function Teclado(): JSX.Element {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    console.log("Tecla pressionada:", e.key);
  };

  return <input onKeyDown={handleKeyDown} placeholder="Pressione uma tecla" />;
}
```

## Eventos de Formulário

Formulários usam eventos como `onSubmit` e `onChange` para controlar entradas de texto, selects, checkboxes, etc.

```tsx
import React, { useState } from "react";

export function Formulario(): JSX.Element {
  const [valor, setValor] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`Enviado: ${valor}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={valor}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValor(e.target.value)
        }
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

## Prevenção de Comportamento Padrão

Para impedir comportamentos nativos, como recarregar a página ao submeter um formulário, use `e.preventDefault()`.

```tsx
const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
  e.preventDefault();
  console.log("Link clicado sem navegar");
};
```

## Delegação de Eventos

React gerencia a delegação de eventos automaticamente no document root, reduzindo o número de _listeners_ e melhorando performance.

## Melhores Práticas

- Tipar sempre os eventos específicos (por exemplo, `MouseEvent`, `ChangeEvent`).
- Evitar funções inline para handlers em componentes filhos, use `useCallback` quando necessário.
- Sempre chamar `preventDefault` somente quando necessário.
- Limpar _listeners_ personalizados em `useEffect` ao desmontar componentes.

## Referências e Leituras Complementares

- Documentação de Eventos: [https://reactjs.org/docs/events.html](https://reactjs.org/docs/events.html)
- Tipos de Eventos em TSX: [https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/events](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/events)
