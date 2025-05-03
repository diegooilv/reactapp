import React, { useState } from "react";
import styles from "./Botao.module.css";

interface ContadorComLimiteProps {
  valor?: number;
  limite: number;
}

export function ContadorComLimite({
  valor = 0,
  limite,
}: ContadorComLimiteProps) {
  const [contador, setContador] = useState(valor);

  const incrementar = () => {
    if (contador < limite) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const resetar = () => setContador(0);

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Contador: {contador}</h2>
      <div className={styles.botoes}>
        <button
          className={styles.botao}
          onClick={decrementar}
          disabled={contador === 0}>
          -
        </button>
        <button
          className={styles.botao}
          onClick={incrementar}
          disabled={contador >= limite}>
          +
        </button>
        <button
          className={styles.botao}
          onClick={resetar}
          disabled={contador === 0}>
          Resetar
        </button>
      </div>
      <p className={styles.limite}>Limite máximo: {limite}</p>
    </div>
  );
}
