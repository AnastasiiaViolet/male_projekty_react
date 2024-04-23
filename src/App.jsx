import { useState } from "react";
import "./index.scss";

const questions = [
  {
    title: "React - to ... ?",
    variants: ["biblioteka", "framework", "aplikacja"],
    correct: 0,
  },
  {
    title: "Komponent - to ... ",
    variants: [
      "aplikacja",
      "część aplikacji lub strony",
      "co to jest, nie wiem",
    ],
    correct: 1,
  },
  {
    title: "Czym jest JSX?",
    variants: [
      "To jest prosty kod HTML",
      "To jest funkcja",
      "To jest ten sam HTML, ale z możliwością wykonania kodu JS",
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Masz {correct} poprawne odpowiedzi z {questions.length}
      </h2>
      {/* restart strony  href="/"*/}
      <a href="/">
        <button>Sprobuj znów</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const procent = Math.round((step / questions.length) * 100); //zaokronglenie naszego procntu
  return (
    <>
      <div className="progress">
        <div style={{ width: `${procent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0); //na którym my pytaniu
  const [correct, setCorrect] = useState(0); //ile poprawnych odpowiedzi
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep((step) => step + 1);
    if (index === question.correct) {
      setCorrect((c) => c + 1);
    }
  };
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
