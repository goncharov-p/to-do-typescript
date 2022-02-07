import { useState } from "react";
import { ITodo } from "../types/data";

interface ITtodoitem extends ITodo {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number) => void;
  editValue: (id: number, value: string) => void;
}

const TodoItem: React.FC<ITtodoitem> = (props) => {
  const {
    id,
    title,
    complete,
    edit,
    toggleTodo,
    removeTodo,
    editTodo,
    editValue,
  } = props;
  const [text, setText] = useState("");

  console.log(text);
  return (
    <div>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      {edit ? (
        <input value={text} onChange={(e) => setText(e.target.value)} />
      ) : (
        title
      )}
      {edit ? (
        <button onClick={() => editValue(id, text)}>Ok</button>
      ) : (
        <button
          onClick={() => {
            editTodo(id);
            setText(title);
          }}
        >
          edit
        </button>
      )}
      <button onClick={() => removeTodo(id)}>X</button>
    </div>
  );
};
export { TodoItem };
