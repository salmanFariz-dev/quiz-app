import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import Main from "./Main";
import StarterScreen from "./StarterScreen";
import Question from "./Question";
import NextBtn from "./NextBtn";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuizContext } from "../context/QuizContext";





function App() {

   const {status} = useQuizContext()

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StarterScreen  />
        )}
        {status === "active" && (
          <>
            <Progress />
            <Question />
          </>
        )}

        {status === "finished" && (
          <FinishedScreen />
        )}
        <Footer>
          {status === "active" && <Timer />}
          <NextBtn />

        </Footer>
      </Main>
    </div>
  );
}

export default App;
