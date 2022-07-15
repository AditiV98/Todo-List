import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";

const AddTodo = (props) => {
  const [task, SetTask] = useState();

  const handleOnChange = (e) => {
    SetTask(e.target.value);
  };
  const addTask = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5500/api/item", {
        item: task,
      });

      console.log(res);
      SetTask("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box component="span">
      <TextField
        id="standard-basic"
        onChange={handleOnChange}
        label="Todo List"
        value={task}
        variant="standard"
      />
      <br></br>
      <br></br>
      <Button variant="contained" onClick={(e) => addTask(e)}>
        Save
      </Button>
    </Box>
  );
};
export default AddTodo;
