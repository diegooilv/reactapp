import "./App.css";
import { ContadorComLimite } from "./components/ContadorComLimite";
import { Tema } from "./components/Tema";
import { Lang } from "./components/MudarIdioma";
import { Relogio } from "./components/Relogio";
import { Cronometro } from "./components/Cronometro";
function App() {
  return (
    <>
      <Tema />
      <p>Primeira página.</p>
      <div>
        <ContadorComLimite limite={15} />
      </div>
      <div>
        <Lang />
      </div>
      <div>
        <Relogio />
      </div>
      <div>
        <Cronometro />
      </div>
    </>
  );
}

export default App;
