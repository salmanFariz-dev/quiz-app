import { useEffect } from "react"

function Timer({dispatch,time}) {

    const min = Math.floor(time / 60)
    const sec = time % 60
    console.log(min);

    useEffect(()=>{
        const id = setInterval(() => {
            dispatch({type : "timer"})
        }, 1000);
        return function(){
            clearInterval(id)
        }
    },[dispatch])

    return (
        <div className="timer">
        <p className={` ${min < 1  ? "blink_me" : ""}`}>{min < 10 && "0"}{min}:{sec < 10 && "0"}{sec}</p>
        </div>
    )
}

export default Timer
