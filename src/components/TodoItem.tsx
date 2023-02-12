import { useContext } from 'react';
import Todo from '../models/todo';
import { TodosContext } from '../store/todos-context';

import styles from './TodoItem.module.css';

const TodoItem: React.FC<{ item: Todo }> = (props) => {
  const ctx = useContext(TodosContext);

  const removeHandler = (event: React.MouseEvent) => {
    console.log('Clicked!');
    console.log(props.item.id);
    ctx.removeTodo(props.item.id);
  };

  return (
    <li className={styles.item} onClick={removeHandler}>
      {props.item.text}
    </li>
  );
};

export default TodoItem;
