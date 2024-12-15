import { useState } from "react";
import { useQuiz } from "@/contexts/QuizContext";
import styles from "@styles/quiz.module.css";

type QuizQuestionProps = {
  id: number;
  question: string;
  options: string[];
  answer: string;
};

export default function QuizQuestion(props: QuizQuestionProps) {
  const [selectedOption, setSelectedOption] = useState("");
  const [animating, setAnimating] = useState(false);

  const isCorrect = selectedOption === props.answer;

  const { advance, validateAnswer } = useQuiz();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isCorrect) validateAnswer();
    setAnimating(true);
    setTimeout(() => {
      advance();
      setAnimating(false);
    }, 500);
  };

  return (
    <div
      className={`${styles.quizQuestion} ${
        animating ? styles.fadeOut : styles.fadeIn
      }`}
    >
      <h2>Question {props.id}</h2>
      <h3>{props.question}</h3>
      <form onSubmit={handleSubmit}>
        {props.options.map((option, index) => (
          <label key={index}>
            <input
              key={index}
              type="radio"
              value={option}
              name="option"
              checked={selectedOption === option}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            {option}
          </label>
        ))}
        <input type="submit" />
      </form>
    </div>
  );
}
