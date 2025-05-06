import { useState } from "react";

type Idioma = "pt" | "en";

export function Lang() {
  const [lang, setLang] = useState<Idioma>("pt");

  const textos: Record<Idioma, { saudacao: string; botao: string }> = {
    pt: {
      saudacao: "Olá Usuário!",
      botao: "Mudar para Inglês",
    },
    en: {
      saudacao: "Hello, User!",
      botao: "Switch to Portuguese",
    },
  };

  const toggleLang = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <div className="container">
      <p className={lang === "pt" ? "texto-pt" : "texto-en"}>
        {textos[lang].saudacao}
      </p>
      <button onClick={toggleLang}>{textos[lang].botao}</button>
    </div>
  );
}

export default Lang;
