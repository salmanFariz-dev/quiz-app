
function FinishedScreen({ points, maxPoints, highScore,dispatch }) {
  const percent = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong>
        &nbsp;out of {maxPoints} ({Math.ceil(percent)}%)
      </p>
      <p className="highscore">(High score is {highScore} )</p>
      <button
        className="btn btn-ui"
        onClick={()=> dispatch({type : "reset"})}>
        Reset
      </button>
    </>
  );
}

export default FinishedScreen;
