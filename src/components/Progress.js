function Progress({index,numQuest,points,answer,maxPoints}) {
    return (
        <header className="progress">
            <progress max={numQuest} value={index + Number(answer !== null)} />
            <p>Question {index + 1}/{numQuest}</p>
            <p>{points}/{maxPoints}</p>
        </header>
    )
}

export default Progress
