function Question({ question,dispatch,answer }) {
  console.log(question);
  
  return (
    <div>
      <h4>{question?.question}</h4>
      <Options question={question}  dispatch={dispatch} answer={answer} />
    </div>
  );
}

function Options({ question,dispatch,answer  }) {
   const hasAnswered = answer !== null
  return (
    <div className="options">
      {question.options.map((opt,i) => {
        return (
          <button key={opt} disabled={hasAnswered} className={`btn btn-option 
          ${answer === i ? "answer" : ""} ${hasAnswered ? i === question.correctOption ? "correct" : "wrong" : ""}`}
          onClick={()=>dispatch({type : "newAnswer", payload : i})}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export default Question;
