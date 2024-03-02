import { useState } from "react";

import './App.css';


function App() {

      const [contador, setContador] = useState(0);

      const  incrementarContador = () => {
        setContador(contador + 1);
      }

      const reiniciarContador = () => {
          setContador(0);
      }

      const disminuirContador = () => {
          setContador(contador - 1);
      }

  return (
    <div className="App">
    <h1>Contador: {contador}</h1>


      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={reiniciarContador}>reiniciar</button>
      <button onClick={disminuirContador}>Disminuir</button>
      </div>
  );
}

export default App;
