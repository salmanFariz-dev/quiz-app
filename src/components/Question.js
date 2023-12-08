import { useQuizContext } from "../context/QuizContext";

function Question() {
  const {questions,index} = useQuizContext()
  const question = questions[index]
  
  return (
    <div>
      <h4>{question?.question}</h4>
      <Options question={question} />
    </div>
  );
}

function Options({question}) {
  const {dispatch,answer} = useQuizContext()
  const hasAnswered = answer !== null
  return (
    //each option button
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
