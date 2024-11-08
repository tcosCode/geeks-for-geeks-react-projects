import { useState } from "react";

export function useJoke() {
  const [joke, setJoke] = useState({ setup: "", delivery: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Any?format=JSON"
      );
      const data = await response.json();

      if (data.type === "single") {
        setJoke({ setup: data.joke, delivery: "" });
      } else if (data.type === "twopart") {
        setJoke({ setup: data.setup, delivery: data.delivery });
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch joke");
    } finally {
      setLoading(false);
    }
  };

  return { joke, loading, error, fetchJoke };
}
