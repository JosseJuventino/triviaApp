import { NavLink } from "react-router-dom";
import {getQuestionByAmount} from "../services/api.service";


function Home() {

  async function setQuestionHandler() {
    localStorage.setItem ("question", JSON.stringify(await getQuestionByAmount(1)));
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
