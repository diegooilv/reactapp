import { useState } from "react";
import styles from "./styles/Avaliacao.module.css";

export function Avaliacao() {
  const [avaliacao, setAvaliacao] = useState(0);

  return (
    <div className={styles.container}>
      <h3 className={styles.titulo}>Avaliação</h3>
      {[1, 2, 3, 4, 5].map((valor) => (
        <button
          key={valor}
          onClick={() => setAvaliacao(valor)}
          className={`${styles.button} ${
            avaliacao >= valor ? styles.buttonSelected : ""
          }`}>
          ⭐
        </button>
      ))}
    </div>
  );
}
