import { ReactNode } from "react";
import { DiceProvider, useDice } from "@/contexts/DiceContext";


export default function RollDice({ children }: { children: ReactNode }) {
  return <DiceProvider>{children}</DiceProvider>;
}

export function RollButton() {
  const { rollDice } = useDice();
  return <button onClick={rollDice}>Roll Dice!</button>;
}
