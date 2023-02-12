import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextShape = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const DUMMY_TODOS = [new Todo('Learn React'), new Todo('Learn TypeScript')];

export const TodosContext = React.createContext<TodosContextShape>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [todos, setTodos] = useState<Todo[]>(DUMMY_TODOS);

  const addTodo = (text: string) => {
    console.log(text);
    setTodos((prevTodos) => prevTodos.concat(new Todo(text)));
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  };

  const contextValue: TodosContextShape = {
    items: todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
