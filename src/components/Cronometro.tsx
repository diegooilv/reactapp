import { useEffect, useState } from "react";

export function Cronometro() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalo: number | undefined;

    if (isRunning) {
      intervalo = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }

    return () => clearInterval(intervalo);
  }, [isRunning]);

  function iniciar() {
    setIsRunning(true);
  }

  function parar() {
    setIsRunning(false);
  }

  function resetar() {
    setIsRunning(false);
    setTime(0);
  }

  return (
    <div>
      <h2>Cronômetro</h2>
      <p>{formatarTempo(time)}</p>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={parar}>Parar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
}

function formatarTempo(ms: number): string {
  const totalSegundos = Math.floor(ms / 1000);
  const horas = String(Math.floor(totalSegundos / 3600)).padStart(2, "0");
  const minutos = String(Math.floor((totalSegundos % 3600) / 60)).padStart(
    2,
    "0"
  );
  const segundos = String(totalSegundos % 60).padStart(2, "0");
  const milissegundos = String(ms % 1000)
    .padStart(3, "0")
    .slice(0, 2); // 2 dígitos de precisão
  return `${horas}:${minutos}:${segundos}.${milissegundos}`;
}
