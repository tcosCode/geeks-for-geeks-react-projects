import { useState } from "react";
import styles from "@styles/coinFlipping.module.css";

/**
 * @component CoinFlippingApp
 * @description A simple React component that simulates flipping a coin.
 * It uses state to manage the current face of the coin (heads or tails) and
 * whether the coin is currently "flipping" (animating).
 *
 * @returns {JSX.Element} The rendered CoinFlippingApp component.
 */
export default function CoinFlippingApp() {
  /**
   * @state face
   * @type {string}
   * @description Stores the current face of the coin ("head" or "tail"). Defaults to "head".
   */
  const [face, setFace] = useState("head");

  /**
   * @state isFlipping
   * @type {boolean}
   * @description Tracks whether the coin is currently being flipped (animating).
   * Used to apply a CSS class for animation. Defaults to false.
   */
  const [isFlipping, setIsFlipping] = useState(false);

  /**
   * @function resultFlip
   * @description Randomly determines the result of the coin flip ("head" or "tail")
   * and updates the `face` state.
   * @returns {void}
   */
  const resultFlip = () => {
    setFace(Math.random() < 0.5 ? "head" : "tail");
  };

  /**
   * @function handleClick
   * @description Handles the click event of the "Flip Coin" button.
   * Sets `isFlipping` to true to trigger the animation, then uses `setTimeout`
   * to call `resultFlip` after a 1-second delay and set `isFlipping` back to false.
   * This creates the visual effect of a coin flip.
   * @returns {void}
   */
  const handleClick = () => {
    setIsFlipping(true);
    setTimeout(() => {
      resultFlip();
      setIsFlipping(false);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <h1>CoinFlippingApp</h1>
      <img
        src={
          face === "head"
            ? "../public/flip-coin/head-coin.avif"
            : "../public/flip-coin/back-coin.jpg"
        }
        alt={face === "head" ? "head-coin" : "tail-coin"}
        className={isFlipping ? styles.flipping : ""}
      />
      <button onClick={handleClick}>Flip Coin </button>
    </div>
  );
}
