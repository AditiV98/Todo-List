import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import axios from "axios";
import Grid from "@mui/material/Grid";
const CardTask = ({ task }) => {
  const deleteTask = (id) => {
    console.log(id);
    return axios.delete(`${"http://localhost:5500/api/item"}/${id}`);
  };

  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="body2">
            {task.item}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            color="error"
            size="small"
            variant="contained"
            onClick={() => deleteTask(task._id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default CardTask;
