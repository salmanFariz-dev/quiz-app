import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import Main from "./Main";
import React, { useEffect, useReducer } from "react";
import StarterScreen from "./StarterScreen";
import Question from "./Question";
import NextBtn from "./NextBtn";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Footer from "./Footer";
import Timer from "./Timer";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  time : 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active",time : state.questions.length * 30};  
    case "newAnswer":
      const quest = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          quest.correctOption === action.payload
            ? state.points + quest.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        answer: null,
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "reset":
      return { ...state, status: "ready", index: 0, points: 0 };
    case "timer" :
      return {...state,time : state.time -1,
         status : state.time === 0 ? "finished" : state.status}
    default:
      throw new Error("invalid action");
  }
}

function App() {
  const [{ questions, status, index, answer, points, highScore, time }, dispatch] =
    useReducer(reducer, initialState);
  console.log(answer);
  const numQuest = questions.length;
  const maxPoints = questions.reduce((total, cur) => {
    return total + cur.points;
  }, 0);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StarterScreen dispatch={dispatch} numQuest={numQuest} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuest={numQuest}
              points={points}
              maxPoints={maxPoints}
              answer={answer}
            />
            <Question
              dispatch={dispatch}
              answer={answer}
              question={questions[index]}
            />
          </>
        )}

        {status === "finished" && (
          <FinishedScreen
            points={points}
            maxPoints={maxPoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
        <Footer>
          {status === "active" && <Timer dispatch={dispatch} time={time} />}
          <NextBtn
            dispatch={dispatch}
            answer={answer}
            index={index}
            numQuest={numQuest}
          />

        </Footer>
      </Main>
    </div>
  );
}

export default App;
