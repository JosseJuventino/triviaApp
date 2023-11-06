import axios from "axios";
const TOKEN='14e32c6ea93417fbd8be0c484a5638f8be0e03583c3cd18e2318877d4cebe668';

const getQuestion = async (amount) => {
  try {
    const response = await axios.get(`https://opentdb.com/api.php?${amount}&token=${TOKEN}`);

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

//Obteniendo Question por cantidad
export const getQuestionByAmount = async (amount) => {
    const queryParams = new URLSearchParams();
    queryParams.append("amount", amount);
  
    return await getQuestion(queryParams.toString());
  };

