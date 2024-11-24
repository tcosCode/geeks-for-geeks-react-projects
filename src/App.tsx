import styles from "@styles/App.module.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className={styles.container}>
        <h1>Geeks for Geeks React Projects</h1>
        <ol>
          <li>
            <Link to={"/SimpleForm"}>Simple Form</Link>
          </li>
          <li>
            <Link to={"/JokeGenerator"}>Joke Generator</Link>
          </li>
          <li>
            <Link to={"/PasswordValidator"}>Password Validator</Link>
          </li>
          <li>
            <Link to={"/IpAddressFinder"}>Ip Address Finder</Link>
          </li>
          <li>
            <Link to={"/DiceRolling"}>Dice Rolling App</Link>
          </li>
        </ol>
      </div>
    </>
  );
}

export default App;
