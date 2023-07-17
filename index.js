const express = require("express");
const connection = require("./db");
const cors = require("cors");
const boardRoute = require("./routes/board.routes");
const taskRoute = require("./routes/task.routes");
const subTaskRoute = require("./routes/subTask.routes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/boards", boardRoute);
app.use("/tasks", taskRoute);
app.use("/subtasks", subTaskRoute);

app.listen(process.env.PORT, async (req, res) => {
    try {
        await connection;
        console.log("Connected");
    } catch (e) {
        console.log(e);
    }
})

