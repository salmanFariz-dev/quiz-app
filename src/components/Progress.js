import { useQuizContext } from "../context/QuizContext"

function Progress() {
    const {numQuest,index,points,answer,maxPoints} = useQuizContext()
    return (
        <header className="progress">
            <progress max={numQuest} value={index + Number(answer !== null)} />
            <p>Question {index + 1}/{numQuest}</p>
            <p>{points}/{maxPoints}</p>
        </header>
    )
}

export default Progress
