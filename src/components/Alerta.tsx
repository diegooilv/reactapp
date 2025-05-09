import { useEffect, useState } from "react";
import styles from "./styles/Alerta.module.css"; // Importando o arquivo de estilos

export function Alerta() {
  const [alerta, setAlerta] = useState("");
  const [novoAlerta, setNovoAlerta] = useState("");
  const [msg, setMsg] = useState("");
  const [timeMs, setTimeMs] = useState(3000);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    let cancelado = false;

    async function loop() {
      while (!cancelado && alerta) {
        setMsg(alerta);
        await sleep(2000);
        setMsg("Sem Avisos");
        await sleep(Math.max(3000, timeMs - 2000));
      }
    }

    if (alerta) loop();

    return () => {
      cancelado = true;
    };
  }, [alerta, timeMs]);

  function handlerTime(e: React.ChangeEvent<HTMLInputElement>) {
    const v = Number(e.target.value);
    if (v > 0) setTimeMs(v * 1000);
    else setMsg("Use da maneira correta!");
  }

  function handlerAlerta(e: React.ChangeEvent<HTMLInputElement>) {
    setNovoAlerta(e.target.value);
  }

  function novoAlertaMetodo() {
    if (novoAlerta && timeMs > 2000) {
      setAlerta(novoAlerta);
    } else {
      setMsg("Delay precisa ser maior que 2 segundos!");
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.titulo}>Alertas!</h3>
      <p className={styles.msg}>{msg || "Sem alertas..."}</p>
      <hr />
      <input
        type="text"
        onChange={handlerAlerta}
        placeholder="Texto do alerta"
        className={styles.input}
      />
      <input
        type="number"
        onChange={handlerTime}
        placeholder="Delay (s)"
        className={styles.inputNumber}
      />
      <button onClick={novoAlertaMetodo} className={styles.button}>
        Definir Alerta
      </button>
    </div>
  );
}
