import { create } from 'zustand'

const useQuestions = create((set) => ({
  questions: localStorage.getItem("question"),
  setQuestions: (questionList) =>
    set(() => ({
      questions: questionList,
    })),
}))

export default useQuestions;
