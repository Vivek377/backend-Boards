const express = require("express");
const SubTaskModel = require("../models/subTask.model");
const subTaskRoute = express.Router();


subTaskRoute.get("/", async (req, res) => {
    try {
        const boards = await SubTaskModel.find();
        res.status(200).send(boards);
    } catch (e) {
        console.log(e);
        res.status(400).send({ err: e.message })
    }
})

subTaskRoute.post("/add", async (req, res) => {
    try {
        const boards = new SubTaskModel(req.body);
        await boards.save();
        res.status(200).send({ msg: "new board added" });
    } catch (e) {
        console.log(e);
        res.status(400).send({ err: e.message })
    }
})

subTaskRoute.patch("/edit/:id", async (req, res) => {
    try {
        const { id } = req.params;
        SubTaskModel.findByIdAndUpdate({ _id: id }, req.body)
        res.status(200).send({ msg: "board updated" });
    } catch (e) {
        console.log(e);
        res.status(400).send({ err: e.message });
    }
})

subTaskRoute.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        SubTaskModel.findByIdAndDelete({ _id: id })
        res.status(200).send({ msg: "board deleted" });
    } catch (e) {
        console.log(e);
        res.status(400).send({ err: e.message });
    }
})


module.exports = subTaskRoute;
