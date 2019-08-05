import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [estado, setEstado] = useState("ENTRADA");

  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setPalpite(150);
    setNumPalpites(1);
    setMin(0);
    setMax(300);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  if (estado === "ENTRADA") {
    return (
      <div className="App">
        <button onClick={iniciarJogo}>Começar a Jogar</button>
      </div>
    );
  }

  if (estado === "FIM") {
    return (
      <div className="App">
        <p>
          Voce acertou o palpite {palpite} com {numPalpites} chutes!
        </p>
        <button onClick={iniciarJogo}> Jogar Novamente </button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu palpuite é {palpite}</p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
