import { useContext, createContext, useState, ReactNode } from "react";

const DiceContext = createContext({
  diceValues: [1, 1],
  rollDice: () => {},
  rolling: false,
});

export const useDice = () => useContext(DiceContext);

export const DiceProvider = ({ children }: { children: ReactNode }) => {
  const [diceValues, setDiceValues] = useState([1, 1]);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const newValues = diceValues.map(() => Math.floor(Math.random() * 6) + 1);
      setDiceValues(newValues);
      setRolling(false);
    }, 1000);
  };

  return (
    <DiceContext.Provider value={{ diceValues, rollDice, rolling }}>
      {children}
    </DiceContext.Provider>
  );
};
