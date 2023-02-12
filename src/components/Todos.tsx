import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';

import styles from './Todos.module.css';

const Todos = () => {
  const ctx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {ctx.items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Todos;
