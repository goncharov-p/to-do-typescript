import { TodoItem } from "./To-do-tem";
import { ITodo } from "../types/data";
interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number) => void;
  editValue: (id: number, value: string) => void;
}

const Todolist: React.FC<ITodoListProps> = (props) => {
  const { items, toggleTodo, removeTodo, editTodo, editValue } = props;
  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
          editValue={editValue}
          {...todo}
        />
      ))}
    </div>
  );
};
export { Todolist };
