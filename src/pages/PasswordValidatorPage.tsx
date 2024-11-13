import { useState } from "react";
import { isStrongPassword } from "validator";

import styles from "@styles/passwordValidator.module.css";

export default function PasswordValidatorPage() {
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (isStrongPassword(event.target.value)) {
      setFeedback("Your password is strong");
    } else {
      setFeedback("Your password is weak");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Checking Password Strength in ReactJS </h1>
      <form action="">
        <label>
          Enter Password:
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="Test your password"
            required
          />
          <div>{password}</div>
          <div className={styles.feedbackValidation}>{feedback}</div>
        </label>
      </form>
    </div>
  );
}
