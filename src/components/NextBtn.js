import { useQuizContext } from "../context/QuizContext";

function NextBtn() {
  const {dispatch,answer,index,numQuest} = useQuizContext()
  if (answer === null) return null;

  if (index < numQuest - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  } else if (index === numQuest - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }else if(index > numQuest){
    <button className="btn btn-ui">Reset</button>
  }
}

export default NextBtn;
