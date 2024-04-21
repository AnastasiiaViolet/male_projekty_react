import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount((c) => c + 1);
  };
  const onClickMinus = () => {
    setCount((c) => c - 1);
  };

  return (
    <div className="App">
      <div>
        <h2>Licznik:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">
          - Odejmować
        </button>
        <button onClick={onClickPlus} className="plus">
          Dodaj +
        </button>
      </div>
    </div>
  );
}

export default App;
