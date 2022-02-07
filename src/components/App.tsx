import { useState, useEffect, useRef } from "react";
import { Todolist } from "./To-dolist";
import { ITodo } from "../types/data";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") Addtodo();
  };

  const Addtodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
          edit: false,
        },
      ]);
      setValue("");
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((element) => {
        if (element.id !== id) return element;
        return {
          ...element,
          complete: !element.complete,
        };
      })
    );
  };

  const editTodo = (id: number): void => {
    setTodos(
      todos.map((element) => {
        if (element.id !== id) return { ...element, edit: false };
        return {
          ...element,
          edit: true,
        };
      })
    );
  };

  const editValue = (id: number, text: string) => {
    setTodos(
      todos.map((element) => {
        if (element.id !== id) return element;
        return {
          ...element,
          title: text,
          edit: false,
        };
      })
    );
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);
  return (
    <div>
      <div>
        <input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button onClick={Addtodo}>Add</button>
      </div>
      <Todolist
        items={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        editValue={editValue}
      />
    </div>
  );
};
export { App };
