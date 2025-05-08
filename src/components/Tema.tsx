import { useState, useEffect } from "react";

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
      <button onClick={alterarTema}>Alterar Tema</button>
    </div>
  );
}
