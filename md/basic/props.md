**Navegação**

- [O que são Props?](#o-que-são-props)
- [Definindo Tipos para Props em TSX](#definindo-tipos-para-props-em-tsx)
- [Props Opcionais e Valores Padrão](#props-opcionais-e-valores-padrão)
- [Children: Conteúdo Dinâmico](#children-conteúdo-dinâmico)
- [Desestruturação e Renomeação de Props](#desestruturação-e-renomeação-de-props)
- [Boas Práticas no Uso de Props](#boas-práticas-no-uso-de-props)
- [Referências e Leituras Complementares](#referências-e-leituras-complementares)

---

## O que são Props?

Props (propriedades) são o mecanismo de passagem de dados de um componente pai para um componente filho em React. Em TypeScript, as props devem ser tipadas para garantir que o componente receba apenas os dados esperados.

## Definindo Tipos para Props em TSX

Em React+TypeScript, usamos interfaces ou tipos para descrever o formato das props que um componente aceita.

```tsx
interface BotaoProps {
  texto: string;
  onClick: () => void;
}

export function Botao({ texto, onClick }: BotaoProps): JSX.Element {
  return <button onClick={onClick}>{texto}</button>;
}
```

A abordagem garante autocompletar e validação de tipos durante o desenvolvimento.

## Props Opcionais e Valores Padrão

Você pode tornar props opcionais adicionando `?` e definir valores padrão usando `defaultProps` ou inicialização direta:

```tsx
interface AlertaProps {
  mensagem: string;
  tipo?: "sucesso" | "erro";
}

export function Alerta({
  mensagem,
  tipo = "sucesso",
}: AlertaProps): JSX.Element {
  return <div className={`alert alert-${tipo}`}>{mensagem}</div>;
}
```

No exemplo, `tipo` é opcional e assume `'sucesso'` se não for informado.

## Children: Conteúdo Dinâmico

O `children` é uma prop especial que permite aninhar elementos dentro de um componente.

```tsx
interface CardProps {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps): JSX.Element {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

// Uso:
// <Card title="Boas-vindas"><p>Olá, mundo!</p></Card>
```

`React.ReactNode` cobre qualquer tipo de elemento React que possa ser renderizado.

## Desestruturação e Renomeação de Props

É comum desestruturar props no parâmetro e renomeá-las para facilitar o uso interno.

```tsx
interface UsuarioProps {
  nome: string;
  idade: number;
}

export function Usuario({
  nome: userName,
  idade: age,
}: UsuarioProps): JSX.Element {
  return (
    <p>
      {userName} tem {age} anos.
    </p>
  );
}
```

## Boas Práticas no Uso de Props

- Mantenha cada componente focado em uma responsabilidade clara.
- Use `PascalCase` para nomes de interfaces de props e `camelCase` para nomes de propriedades.
- Sempre tipar `children` quando usado e preferir `ReactNode`.
- Evitar passar funções ou objetos inline sem uso de `useCallback` ou `useMemo` em casos de performance.

## Referências e Leituras Complementares

- Documentação de Props: [https://reactjs.org/docs/components-and-props.html](https://reactjs.org/docs/components-and-props.html)
- React TypeScript Cheatsheet: [https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/props](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/props)
- ReactNode: [https://reactjs.org/docs/react-api.html#reactnode](https://reactjs.org/docs/react-api.html#reactnode)
