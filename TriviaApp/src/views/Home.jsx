import { getQuestionByAmount } from "../services/api.service";
import { useState } from "react";

function Home() {
    const [question, setQuestion] = useState(null);
  
  async function setQuestionHandler() {
    const question = await getQuestionByAmount(1);
    setQuestion(question);
    }
  return (
    <>
      <h1>Trivia GAME</h1> 
      <button>Iniciar partida</button>
    </>
  );
}

export default Home;