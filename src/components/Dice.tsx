import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

import { useDice } from "@/contexts/DiceContext";
import styles from "@/styles/diceRolling.module.css";

export default function Dice({ index }: { index: number }) {
  const { diceValues, rolling } = useDice();
  const iconName: { [key: number]: IconDefinition } = {
    1: faDiceOne,
    2: faDiceTwo,
    3: faDiceThree,
    4: faDiceFour,
    5: faDiceFive,
    6: faDiceSix,
  };

  return (
    <FontAwesomeIcon
      icon={iconName[diceValues[index]]}
      className={`${styles.dice} ${rolling && styles.dieShaking}`}
    />
  );
}
