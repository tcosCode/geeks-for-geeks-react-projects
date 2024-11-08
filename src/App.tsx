import styles from "@styles/App.module.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className={styles.container}>
        <h1>Geeks for Geeks React Projects</h1>
        <ol>
          <li>
            <Link to={"/SimpleFormPage"}>Simple Form</Link>
          </li>
          <li>
            <Link to={"/JokeGeneratorPage"}>Joke Generator</Link>
          </li>
        </ol>
      </div>
    </>
  );
}

export default App;
