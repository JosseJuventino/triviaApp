import axios from "axios";
const TOKEN='14e32c6ea93417fbd8be0c484a5638f8be0e03583c3cd18e2318877d4cebe668';

const getQuestion = async (query) => {
  try {
    const response = await axios.get(`https://opentdb.com/api.php?${query}&token=${TOKEN}`);

    // Check if the HTTP response is successful
    if (response.status === 200) {
      // The response data is already in JSON format
      return Array.isArray(response.data) ? response.data : [response.data];
    } else {
      return [];
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return [];
  }
};

//* Esta funcion servira para obtener las preguntas por cantidad
export const getQuestionByAmount = async (amount) => {
    const queryParams = new URLSearchParams();
    queryParams.append("amount", amount);
  
    return await getQuestion(queryParams.toString());
};


//* Esta funcion servira para filtrar las preguntas por categoria

export const getQuestionByCategory = async (category) => {
    const queryParams = new URLSearchParams();
    queryParams.append("category", category);
  
    return await getQuestion(queryParams.toString());
}

//* Esta funcion servira para filtrar las preguntas por dificultad

export const getQuestionByDifficulty = async (difficulty) => {
    const queryParams = new URLSearchParams();
    queryParams.append("difficulty", difficulty);

    return await getQuestion(queryParams.toString());
}


//* Esta funcion servira para filtrar las preguntas por tipo
export const getQuestionByType = async (type) => {
    const queryParams = new URLSearchParams();
    queryParams.append("type", type);

    return await getQuestion(queryParams.toString());
}


//* Esta funcion servira para pasarle diferentes parametros, es decir custmizar el juego
export const customGame = async (amount, category, difficulty, type) => {
    const queryParams = new URLSearchParams();
    queryParams.append("amount", amount);
    queryParams.append("category", category);
    queryParams.append("difficulty", difficulty);
    queryParams.append("type", type);

    return await getQuestion(queryParams.toString());
}
