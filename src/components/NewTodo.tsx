import { useContext, useRef } from 'react';
import { TodosContext } from '../store/todos-context';

import styles from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const context = useContext(TodosContext);

  const textInputRef = useRef<HTMLInputElement>(null);

  const newTaskHander = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    context.addTodo(enteredText);
  };

  return (
    <form className={styles.form} onSubmit={newTaskHander}>
      <label htmlFor="text">New task:</label>
      <input type="text" id="text" ref={textInputRef} />
      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTodo;
