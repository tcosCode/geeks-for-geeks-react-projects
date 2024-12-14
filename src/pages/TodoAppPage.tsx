import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "@styles/todoApp.module.css";

export default function TodoAppPage() {
  const [todos, setTodos] = useState<string[]>([]);
  const ref = useRef<HTMLInputElement>(null);

  function addTodo() {
    if (ref.current && ref.current.value.trim()) {
      const value = ref.current.value;
      setTodos((prevTodos) => [...prevTodos, value || ""]);
      ref.current.value = "";
    } else {
      alert("Please enter a value");
    }
  }

  function editTodo(todo: string, index: number) {
    const newTodo = prompt("Write your new TODO", todo);
    if (newTodo && newTodo.trim()) {
      setTodos((prevTodos: string[]) =>
        prevTodos.toSpliced(index, 1, newTodo.trim())
      );
    }
  }

  function deleteTodo(index: number) {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }

  return (
    <div className={styles.container}>
      <h1>TODO LIST</h1>
      <div className={styles.containerTodos}>
        <input
          type="text"
          name="input-todo"
          placeholder="Add item..."
          ref={ref}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={uuidv4()}>
              {todo}
              <div className={styles.buttons}>
                <button onClick={() => editTodo(todo, index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
