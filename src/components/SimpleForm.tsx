import { ChangeEvent, useState, FormEvent, useRef } from "react";
import styles from "@styles/SimpleForm.module.css";

type Gender = "Male" | "Female" | "Other";

interface SimpleFormsInputs {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  gender: Gender;
  subject: { English: boolean; Maths: boolean; Physics: boolean };
  resume: File | "";
  url: string;
  ans: string;
  about: string;
}

export default function SimpleForm() {
  const initialFormState: SimpleFormsInputs = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "Male",
    subject: { English: false, Maths: false, Physics: false },
    resume: "",
    url: "",
    ans: "",
    about: "",
  };

  const [inputs, setInputs] = useState<SimpleFormsInputs>(initialFormState);
  const [formKey, setFormKey] = useState(0); // Usar para forzar el reset de todo el formulario
  const fileInputRef = useRef<HTMLInputElement>(null); // Referencia para el input de archivo

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, name: e.currentTarget.value });
  };

  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, lastName: e.currentTarget.value });
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, email: e.currentTarget.value });
  };

  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, phone: e.currentTarget.value });
  };

  const handleGender = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, gender: e.currentTarget.value as Gender });
  };

  const handleSubject = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    setInputs((prevInputs) => ({
      ...prevInputs,
      subject: { ...prevInputs.subject, [name]: checked },
    }));
  };

  const handleResume = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (file) {
      setInputs({ ...inputs, resume: file });
    }
  };

  const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, url: e.currentTarget.value });
  };

  const handleAns = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputs({ ...inputs, ans: e.currentTarget.value });
  };

  const handleAbout = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputs({ ...inputs, about: e.currentTarget.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs, "Form submitted");
    alert("Form submitted");
  };

  // Reset function to clear form state
  const resetForm = () => {
    setInputs(initialFormState); // Resetear el estado del formulario
    setFormKey((prevKey) => prevKey + 1); // Cambiar la key para forzar el re-renderizado completo
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Resetear el campo de archivo
    }
  };

  return (
    <form className={styles.form} key={formKey} onSubmit={handleSubmit}>
      <fieldset>
        <legend className="titleForm">
          <h2>Form in React</h2>
        </legend>

        {/* First Name */}
        <label>
          First Name <sup>*</sup>
          <input
            type="text"
            onChange={handleName}
            value={inputs.name}
            placeholder="Enter first name"
            required
          />
        </label>

        {/* Last Name */}
        <label>
          Last Name <sup>*</sup>
          <input
            type="text"
            onChange={handleLastName}
            value={inputs.lastName}
            placeholder="Enter last name"
            required
          />
        </label>

        {/* Email */}
        <label>
          Email <sup>*</sup>
          <input
            type="email"
            onChange={handleEmail}
            value={inputs.email}
            placeholder="Enter email"
            required
          />
        </label>

        {/* Phone */}
        <label>
          Phone
          <input
            type="text"
            onChange={handlePhone}
            value={inputs.phone}
            placeholder="Enter mobile number"
            required
          />
        </label>

        {/* Gender */}
        <fieldset className={styles.gender}>
          <legend>
            Gender <sup>*</sup>
          </legend>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleGender}
              checked={inputs.gender === "Male"}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleGender}
              checked={inputs.gender === "Female"}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={handleGender}
              checked={inputs.gender === "Other"}
            />
            Other
          </label>
        </fieldset>

        {/* Subject */}
        <fieldset className={styles.subject}>
          <legend>Your best subject</legend>
          <label>
            <input
              type="checkbox"
              onChange={handleSubject}
              name="English"
              checked={inputs.subject.English}
            />
            English
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleSubject}
              name="Maths"
              checked={inputs.subject.Maths}
            />
            Maths
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleSubject}
              name="Physics"
              checked={inputs.subject.Physics}
            />
            Physics
          </label>
        </fieldset>

        {/* Resume */}
        <label>
          Upload Resume
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleResume}
            required
          />
        </label>

        {/* URL */}
        <label>
          Enter URL <sup>*</sup>
          <input
            type="url"
            onChange={handleUrl}
            value={inputs.url}
            placeholder="Enter url"
          />
        </label>

        {/* Ans */}
        <label htmlFor="choices">Select your choice</label>
        <select id="choices" value={inputs.ans} onChange={handleAns}>
          <option value="" disabled>
            Select your Ans
          </option>
          <optgroup label="Beginners">
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">JavaScript</option>
          </optgroup>
          <optgroup label="Advance">
            <option value="4">React</option>
            <option value="5">Node</option>
            <option value="6">Express</option>
            <option value="7">MongoDB</option>
          </optgroup>
        </select>

        {/* About */}
        <label>
          About
          <textarea
            onChange={handleAbout}
            value={inputs.about}
            placeholder="About yourself"
            cols={30}
            rows={10}
          ></textarea>
        </label>
        <label>Submit or Reset</label>
        <div className={styles.buttons}>
          <button type="submit">Submit</button>
          <button type="button" onClick={resetForm}>
            Reset
          </button>
        </div>
      </fieldset>
    </form>
  );
}
