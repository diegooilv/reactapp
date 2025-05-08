import { useState } from "react";
import { evaluate } from "mathjs"; // Importando a função de avaliação do math.js
import styles from "./styles/MiniCalculadora.module.css";

export function MiniCalculadora() {
  const [calc, setCalc] = useState("");

  function addNumber(n: string) {
    setCalc((prev) => prev + n);
  }

  function verifySinal() {
    if (calc.length === 0) return true;
    return "+-*/=".includes(calc[calc.length - 1]);
  }

  function addOperator(op: string) {
    if (verifySinal()) return;
    setCalc((prev) => prev + op);
  }

  function calculate() {
    if (calc.includes("erro") || calc == "" || calc.includes("Infinity")) {
      clear();
      return;
    }
    try {
      setCalc(evaluate(calc).toString());
    } catch {
      setCalc("erro");
    }
  }

  function clear() {
    setCalc("");
  }

  return (
    <div className={styles.Calc}>
      <h3>Calculadora</h3>
      <p>{calc}</p>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => (
        <button key={n} onClick={() => addNumber(n.toString())}>
          {n}
        </button>
      ))}
      <button onClick={() => addOperator("+")}>+</button>
      <button onClick={() => addOperator("-")}>-</button>
      <button onClick={() => addOperator("*")}>*</button>
      <button onClick={() => addOperator("/")}>/</button>
      <button onClick={calculate}>=</button>
      <button onClick={clear}>C</button>
    </div>
  );
}
