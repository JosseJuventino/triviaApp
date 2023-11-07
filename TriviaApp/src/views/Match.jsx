
import { useEffect, useState } from "react";
import useQuestions from "../store/useQuestions";

function Match(){
   
    const {questions} = useQuestions();
    const [quest, setQuest] = useState([]);

    useEffect(() => {
        setQuest(questions)
    }, [questions]);

    console.log(quest);
    return(
        <>
        <div>
            <h1>Match</h1>
            {quest.length == 0  ? "Cargando preguntas..." : ""}
        </div>
        </>

    )
}
export default Match;