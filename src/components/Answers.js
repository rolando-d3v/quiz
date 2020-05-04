import React from "react";
import Answer from "./Answer";

function Answers({ question, currentAnswer, handleClick }) {
  return (
    <div>
      <Answer
        letter="a"
        answer={question.answer_a}
        handleClick={handleClick}
        selected={currentAnswer === "a"}
      />
      <Answer
        letter="b"
        answer={question.answer_b}
        handleClick={handleClick}
        selected={currentAnswer === "b"}
      />
      <Answer
        letter="c"
        answer={question.answer_c}
        handleClick={handleClick}
        selected={currentAnswer === "c"}
      />
      <Answer
        letter="d"
        answer={question.answer_d}
        handleClick={handleClick}
        selected={currentAnswer === "d"}
      />
    </div>
  );
}

export default Answers;
