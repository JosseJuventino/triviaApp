import { useState } from "react";
import "./App.css";
import { getQuestionByAmount } from "./services/api.service";
function App() {
  const [question, setQuestion] = useState(null);
  
  async function setQuestionHandler() {
    const question = await getQuestionByAmount(1);
    setQuestion(question);
    }
    console.log(question)
  return (
    <>
      <h1>Hello world!</h1> 
      <button onClick={setQuestionHandler}>
        Get question
      </button>
    </>
    
  );
}

export default App;
