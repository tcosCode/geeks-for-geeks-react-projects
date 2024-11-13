import { useJoke } from "@/hooks/useJoke";
import styles from "@styles/jokeGenerator.module.css";

export default function JokeGenerator() {
  const { joke, loading, error, fetchJoke } = useJoke();

  return (
    <div className={styles.container}>
      <h1>Joke Generator using Joke API</h1>
      <button onClick={fetchJoke} disabled={loading}>
        {loading ? "Loading..." : "Click to generate a joke"}
      </button>
      {error && <p className="error">{error}</p>}
      <div className={styles.joke}>
        {joke.setup && (
          <>
            <p>{joke.setup}</p>
            {joke.delivery && <p>{joke.delivery}</p>}
          </>
        )}
      </div>
    </div>
  );
}
