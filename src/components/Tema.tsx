import { useState, useEffect } from "react";
import styles from "./styles/Botao.module.css";

export function Tema() {
  const [tema, setTema] = useState<"light" | "dark">("light");
  const alterarTema = () => {
    setTema((prev) => (prev === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.body.className = tema;
  }, [tema]);

  return (
    <div>
      <p>Tema atual: {tema}</p>
      <button onClick={alterarTema} className={styles.botao}>
        {" "}
        Alterar Tema
      </button>
    </div>
  );
}
