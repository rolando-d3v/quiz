import React from "react";
import "./quiz.scss";

function Answer({ letter, answer, selected, handleClick}) {

  let classes = ['answer']

  if(selected){
    classes.push('selected');
  }

  return (
    <div 
    style={{ display: "flex", justifyContent: "center" }}>
      <button
        // className="btn btn-info my-2 botonopciones"
        style={{ width: "800px", textAlign: "start", margin: "5px 0 5px 0" }}
        value={letter}
        className={classes.join(' ')}
        onClick={handleClick}
      >
        <span className="text-capitalize"> {letter} . </span>
        {answer} 
      </button>
    </div>
  );
}

export default Answer;
