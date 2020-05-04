import React, { useState } from "react";
import Progress from "./components/Progress";
import Question from "./components/Question";
import Answers from "./components/Answers";
import './components/quiz.scss'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [answers, setAnswers] = useState([]); //avanzar pregunta
  const [showResults, setShowResults] = useState(false); //mostrar resultados
  const [error, setError] = useState(""); // mostrar error

  const questions = [
    {
      id: 1,
      question: "Which statement about Hooks is not true?",
      answer_a:
        "Hooks are 100% backwards-compatible and can be used side by side with classes",
      answer_b: "Hooks are still in beta and not available yet",
      answer_c:
        "Hooks are completely opt-in, there's no need to rewrite existing code",
      answer_d: "All of the above",
      correct_answer: "b",
    },
    {
      id: 2,
      question: "Which one is not a Hook?",
      answer_a: "useState()",
      answer_b: "useConst()",
      answer_c: "useReducer()",
      answer_d: "All of the above",
      correct_answer: "b",
    },
    {
      id: 3,
      question: "What Hook should be used for data fetching?",
      answer_a: "useDataFetching()",
      answer_b: "useApi()",
      answer_c: "useEffect()",
      answer_d: "useRequest()",
      correct_answer: "c",
    },
  ];

  const question = questions[currentQuestion];

  
  // seleccionar valor de letra
  const handleClick = (e) => {
    setCurrentAnswer(e.target.value);
    setError("");
  };

  // Mostrar Error
  const renderError = () => {
    if (!error) {
      return;
    }
    return (
      <div
        style={{
          color: "red",
          textAlign: "center",
          fontSize: "20px",
          marginBottom: "15px",
        }}
      >
        {error}
      </div>
    );
  };

  //mostrar la respuesta correcta o Incorrecta
  const renderResultMark = (question, answer) => {
      if(question.correct_answer === answer.answer){
          return <span className="correct" >Correcta</span>
      }
      return <span className="failed" >Incorrecta</span>
  }


  // mostrar resultados
  const renderResultsData = () => {
    return answers.map((answer) => {
      const question = questions.find(
        (question) => question.id === answer.questionId
      );
      return(
          <div key={question.id} >
                {question.question} - {renderResultMark(question, answer)}
          </div>
      )
    });
  };

  // volver a dar examen
  const restart = () => {
      setAnswers([])
      setCurrentAnswer('')
      setCurrentQuestion(0)
      setShowResults(false)
  }

  // avanzar siguiente pregunta
  const next = () => {
    const answer = { questionId: question.id, answer: currentAnswer };

    if (!currentAnswer) {
      setError("Selecciona una Opcion");
      return;
    }

    answers.push(answer);
    setAnswers(answers);
    setCurrentAnswer("");

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }

    setShowResults(true);
  };

  //___________________________

  if (showResults) {
    return (
      <div className="resultado">
        <h2>resultados</h2>
        <ul> {renderResultsData()} </ul>
        <button className="btn btn-secondary" onClick={restart}>
          Restart
        </button>
      </div>
    );
  } else {
    return (
      <div
        className="container mt-5 p-4"
        style={{ backgroundColor: "#282c34", fontSize: "20px" }}
      >
        <Progress current={currentQuestion + 1} total={questions.length} />
        <Question question={question.question} />
        {renderError()}
        <Answers
          question={question}
          currentAnswer={currentAnswer}
          handleClick={handleClick}
        />
        <div className="mt-4">
          <button className="btn btn-secondary" onClick={next}>
            Confirmar y Continuar
          </button>
        </div>
      </div>
    );
  }
}

export default App;
