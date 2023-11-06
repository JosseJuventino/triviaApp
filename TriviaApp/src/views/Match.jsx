import { spread } from "axios";
import { useState } from "react";

function Match(){

    let _LGTB = JSON.parse(localStorage.getItem ("question"));
    const[quesNum, setquesNum] = useState(0);
    let newArray = [_LGTB[0].results[quesNum].incorrect_answers]
    


    return(
        <>
        <div>
            <h1>Match</h1>
            <h3><div dangerouslySetInnerHTML={{__html: _LGTB[0].results[quesNum].question}} /></h3>

            <button></button>
            <button></button>
            <button></button>
        </div>
        </>

    )
}
export default Match;