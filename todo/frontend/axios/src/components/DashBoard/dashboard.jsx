import AddTodo from "../AddTodo/addTodo";
import DisplayTodo from "../DisplayTodo/displayTodo";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import axios from "axios";
const DashBoard = () => {
  const [todoList, SetTodoList] = useState([]);

  useEffect(() => {
    const getItemsList = async () => {
      try {
        const res = await axios.get("http://localhost:5500/api/items");
        SetTodoList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getItemsList();
  }, [todoList]);

  return (
    <>
      <AddTodo></AddTodo>
      <br></br>
      <br></br>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <DisplayTodo todolist={todoList}></DisplayTodo>
        </Grid>
      </Box>
    </>
  );
};
export default DashBoard;
