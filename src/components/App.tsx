import { useState, useEffect, useRef } from "react";
import { Todolist } from "./To-dolist";
import { ITodo } from "../types/data";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Container,Button,Stack } from "@mui/material";

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

  return (<div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Toolbar variant="dense">
            <Typography variant="h4" m="auto" color="inherit" component="div">
              To-do-list
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
     
        <Container maxWidth = "sm" >
    <Stack direction="row" alignItems="center" justifyContent="center">
          <TextField
          fullWidth
          size="small"
          id="standard-basic"
          label="Поле для текста"
          variant="standard"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <Button variant="outlined" onClick={Addtodo}>Add</Button>

        </Stack>
        </Container>
        
      
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
