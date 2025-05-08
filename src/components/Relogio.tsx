import { useEffect, useState } from "react";
import styles from "./styles/Relogio.module.css"; // Importando o CSS Module

export function Relogio() {
  const [horario, setHorario] = useState(getHorarioAtual());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHorario(getHorarioAtual());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className={styles.relogioContainer}>
      <h2>Horario Atual</h2>
      <p>{horario}</p>
    </div>
  );
}

function getHorarioAtual() {
  const agora = new Date();
  return agora.toLocaleTimeString();
}
