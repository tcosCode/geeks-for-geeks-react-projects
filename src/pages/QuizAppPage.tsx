import qBank from "@/utils/questionBank";
import QuizQuestion from "@/components/QuizQuestion";
import { QuizProvider, useQuiz } from "@/contexts/QuizContext";
import styles from "@styles/quiz.module.css";

function QuizContent() {
  const { currentQuestion, correctAnswers, reset } = useQuiz();

  return (
    <div className={styles.container}>
      <h1>Quiz App</h1>
      {currentQuestion < 5 ? (
        <QuizQuestion {...qBank[currentQuestion]} />
      ) : (
        <>
          <h2>Score:</h2>
          <p>
            Correct Answers: <span>{correctAnswers}</span>
          </p>
          <h2>You have completed the quiz!</h2>
          <button onClick={() => reset()}>Reset</button>
        </>
      )}
    </div>
  );
}

export default function QuizAppPage() {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
}
