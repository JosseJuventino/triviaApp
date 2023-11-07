import { NavLink } from "react-router-dom";
import {getQuestionByAmount} from "../services/api.service";
import useQuestions from "../store/useQuestions";

function Home() {
  const {setQuestions} = useQuestions();

  async function setQuestionHandler() {
    let questionsFetch = await getQuestionByAmount(10);
    localStorage.setItem("question", JSON.stringify(questionsFetch));
    setQuestions(questionsFetch);
  }
  
  return (
    <>
      <h1>Trivia GAME</h1>
      <NavLink to="/Match">
        <button onClick={setQuestionHandler}>Iniciar partida</button>
      </NavLink>
    </>
  );
}

export default Home;
