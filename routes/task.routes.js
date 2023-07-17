const express = require("express");
const TaskModel = require("../models/task.model");
const taskRoute = express.Router();


taskRoute.get("/", async (req, res) => {
    try {
        const boards = await TaskModel.find();
        res.status(200).send(boards);
    } catch (e) {
        console.log(e);
        res.status(400).send({ err: e.message })
    }
})

taskRoute.post("/add", async (req, res) => {
    try {
        const boards = new TaskModel(req.body);
        await boards.save();
        res.status(200).send({ msg: "new task added" });
    } catch (e) {
        console.log(e);
        res.status(400).send({ err: e.message })
    }
})

taskRoute.patch("/edit/:id", async (req, res) => {
    try {
        const { id } = req.params;
        TaskModel.findByIdAndUpdate({ _id: id }, req.body)
        res.status(200).send({ msg: "task updated" });
    } catch (e) {
        console.log(e);
        res.status(400).send({ err: e.message });
    }
})

taskRoute.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        TaskModel.findByIdAndDelete({ _id: id });
        res.status(200).send({ msg: "task deleted" });
    } catch (e) {
        console.log(e);
        res.status(400).send({ err: e.message });
    }
})


module.exports = taskRoute;
