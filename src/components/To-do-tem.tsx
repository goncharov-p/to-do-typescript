import { useState } from "react";
import { ITodo } from "../types/data";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Checkbox, TextField, Card, Container,CardContent,Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { height } from "@mui/system";

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
    <Stack direction="column" alignItems="center" justifyContent="center" mb="2rem" >
      <Card sx={{ width:500}} >
        {/* <CardContent > */}
          <Stack direction="row" sx={{ width:500}} >
          <Checkbox
          // sx={{ flexGrow:  }}
          // type="checkbox"
          color="success"
          checked={complete}
          onChange={() => toggleTodo(id)}
        />
        {edit ? (
          <TextField
          // sx ={{mr:"80px"}}
          sx={{ flexGrow: 3 ,mr:"10px"}}
            variant="outlined"
            size="small"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <Typography sx={{ fontSize: 14,width:'190vw' }} color="text.secondary" m = 'auto'>{title}</Typography>//Почему ширину приходится задавать 190vw
          
        )}
        
        {edit ? (
          <Button variant="MyButton" onClick={() => editValue(id, text)}  >
            Ok
          </Button>
        ) : (
          <Container sx={{ flexGrow: 5}} >
            <EditIcon
              onClick={() => {
                editTodo(id);
                setText(title);
              }}
              />
            <DeleteIcon onClick={() => removeTodo(id)} />
          </Container>
        )}
        </Stack>
        {/* </CardContent>      */}
      </Card>
     </Stack>
  );
};
export { TodoItem };
