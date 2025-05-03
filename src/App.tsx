import "./App.css";
import { ContadorComLimite } from "./components/ContadorComLimite";
import { Tema } from "./components/Tema";
function App() {
  return (
    <>
      <Tema />
      <h1>Olá</h1>
      <p>Primeira página.</p>
      <div>
        <ContadorComLimite limite={15} />
      </div>
    </>
  );
}

export default App;
