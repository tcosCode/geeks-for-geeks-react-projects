import { useContext, createContext, useState, ReactNode } from "react";

const QuizContext = createContext({
  currentQuestion: 0,
  correctAnswers: 0,
  validateAnswer: () => {},
  advance: () => {},
  reset: () => {},
});

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const advance = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const validateAnswer = () => {
    setCorrectAnswers((prev) => prev + 1);
  };

  const reset = () => {
    setCurrentQuestion(0);
    setCorrectAnswers(0);
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        correctAnswers,
        advance,
        reset,
        validateAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
