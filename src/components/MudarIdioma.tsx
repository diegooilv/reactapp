import { useState } from "react";
import styles from "./styles/Lang.module.css"; // Importando o CSS Module

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
    <div className={styles.container}>
      <p className={lang === "pt" ? styles.textoPt : styles.textoEn}>
        {textos[lang].saudacao}
      </p>
      <button onClick={toggleLang}>{textos[lang].botao}</button>
    </div>
  );
}

export default Lang;
