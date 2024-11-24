import Dice from "@/components/Dice";
import RollDice, { RollButton } from "@/components/RollDice";

import styles from "@styles/diceRolling.module.css";

export default function DiceRollingPage() {
  return (
    <div className={styles.container}>
      <h1>Dice Rolling</h1>
      <RollDice>
        <div className={styles.allDice}>
          <Dice index={0} />
          <Dice index={1} />
        </div>
        <RollButton />
      </RollDice>
    </div>
  );
}
