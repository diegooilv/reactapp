import "./App.css";
import { ContadorComLimite } from "./components/ContadorComLimite";
import { Tema } from "./components/Tema";
import { Lang } from "./components/MudarIdioma";
import { Relogio } from "./components/Relogio";
import { Cronometro } from "./components/Cronometro";
import { MiniCalculadora } from "./components/MiniCalculadora";
import { List } from "./components/List"
import { Avaliacao } from "./components/Avaliação";
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
      <div>
        <MiniCalculadora />
      </div>
      <div>
        <List/>
      </div>
      <div>
        <Avaliacao/>
      </div>
    </>
  );
}

export default App;
