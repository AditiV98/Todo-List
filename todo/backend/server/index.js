const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

app.use(express.json());

// Config
dotenv.config({ path: "backend/server/config.env" });

app.use(cors());

const TodoItemRoute = require("./routes/todoItems");

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use("/", TodoItemRoute);

app.listen(process.env.PORT, () => console.log("server connected"));
