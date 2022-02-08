import { TodoItem } from "./To-do-tem";
import { ITodo } from "../types/data";
import { Checkbox, TextField, Card, Container,CardContent,Typography} from "@mui/material";

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
    <Container sx ={{mt:2}}>
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
    </Container>
  );
};
export { Todolist };
