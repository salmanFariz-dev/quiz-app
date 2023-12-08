import { useQuizContext } from "../context/QuizContext"

function StarterScreen() {
    const {numQuest,dispatch} = useQuizContext()

    return (
        <div className="start">
            <h2>Welcome to react quize</h2>
            <h3>{numQuest} questions to test your react mastrey</h3>
            <button className="btn btn-ui" onClick={()=> dispatch({type : "start"})}>Let's start</button>
        </div>
    )
}

export default StarterScreen
