import { useState } from "react";

import ButtonWithIcon from "@/components/ButtonWithIcon";
import styles from "@/styles/rockPaperScissor.module.css";

export default function RockPaperScissorPage() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const choices = ["rock", "paper", "scissors"];

  const options = (playerChoice: string, computerChoice: string) => ({
    playerRockWins: playerChoice === "rock" && computerChoice === "scissors",
    playerRockLoses: playerChoice === "rock" && computerChoice === "paper",
    playerPaperWins: playerChoice === "paper" && computerChoice === "rock",
    playerPaperLoses: playerChoice === "paper" && computerChoice === "scissors",
    playerScissorsWins:
      playerChoice === "scissors" && computerChoice === "paper",
    playerScissorsLoses:
      playerChoice === "scissors" && computerChoice === "rock",
  });

  const handleClick = (choice: string) => {
    const newPlayerChoice = choice;
    const randomIndex = Math.floor(Math.random() * choices.length);
    const newComputerChoice = choices[randomIndex];

    setPlayerChoice(newPlayerChoice);
    setComputerChoice(newComputerChoice);

    if (newPlayerChoice === newComputerChoice) {
      // Draw
      return;
    }

    const resultOptions = options(newPlayerChoice, newComputerChoice);

    if (newPlayerChoice === "rock") {
      if (resultOptions.playerRockWins) setPlayerScore((score) => score + 1);
      if (resultOptions.playerRockLoses) setComputerScore((score) => score + 1);
    } else if (newPlayerChoice === "paper") {
      if (resultOptions.playerPaperWins) setPlayerScore((score) => score + 1);
      if (resultOptions.playerPaperLoses)
        setComputerScore((score) => score + 1);
    } else if (newPlayerChoice === "scissors") {
      if (resultOptions.playerScissorsWins)
        setPlayerScore((score) => score + 1);
      if (resultOptions.playerScissorsLoses)
        setComputerScore((score) => score + 1);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Rock Paper Scissor Game</h1>
      <section className={styles.buttons}>
        <ButtonWithIcon
          icon="✊"
          text="Rock"
          onClick={() => handleClick("rock")}
          className="rock"
        />
        <ButtonWithIcon
          icon="✋"
          text="Paper"
          onClick={() => handleClick("paper")}
          className="paper"
        />
        <ButtonWithIcon
          icon="✌️"
          text="Scissors"
          onClick={() => handleClick("scissors")}
          className="scissors"
        />
      </section>
      <section className={styles.results}>
        <h3>Your Choice: {playerChoice}</h3>
        <h3>Computer's Choice: {computerChoice}</h3>
        <h2>Your Score: {playerScore}</h2>
        <h2>Computer's Score: {computerScore}</h2>
      </section>
    </div>
  );
}
