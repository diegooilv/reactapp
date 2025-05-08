import { useState } from "react";
import styles from "./styles/List.module.css";

export function List() {
  const [itens, setItens] = useState<string[]>([]);
  const [texto, setTexto] = useState("");

  function adicionarItem() {
    if (!texto.trim()) return;
    setItens((prevItens) => [...prevItens, texto.trim()]);
    setTexto("");
  }

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTexto(e.target.value);
  };

  function removerItem(index: number) {
    setItens((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className={styles.container}>
      <h2>Lista de Tarefas</h2>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={texto}
          onChange={handlerChange}
          placeholder="Digite uma tarefa..."
          className={styles.input}
        />
        <button onClick={adicionarItem} className={styles.buttonAdd}>
          Adicionar
        </button>
      </div>
      <ul className={styles.list}>
        {itens.map((item, index) => (
          <li key={index} className={styles.item}>
            <span>{item}</span>
            <button
              onClick={() => removerItem(index)}
              className={styles.buttonRemove}>
              Concluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
