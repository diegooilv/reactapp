import "./App.css";
import { ContadorComLimite } from "./components/ContadorComLimite";
import { Tema } from "./components/Tema";
import { Lang } from "./components/MudarIdioma";
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
    </>
  );
}

export default App;
