const express = require("express");
const BoardModel = require("../models/board.model");
const boardRoute = express.Router();


boardRoute.get("/", async (req, res) => {
    try {
        const boards = await BoardModel.find();
        res.status(200).send(boards);
    } catch (e) {
        console.log(e);
        res.status(400).send({ err: e.message })
    }
})

boardRoute.post("/add", async (req, res) => {
    try {
        const boards = new BoardModel(req.body);
        await boards.save();
        res.status(200).send({ msg: "new board added" });
    } catch (e) {
        console.log(e);
        res.status(400).send({ err: e.message })
    }
})

boardRoute.patch("/edit/:id", async (req, res) => {
    try {
        const { id } = req.params;
        BoardModel.findByIdAndUpdate({ _id: id }, req.body)
        res.status(200).send({ msg: "board updated" });
    } catch (e) {
        console.log(e);
        res.status(400).send({ err: e.message });
    }
})

boardRoute.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        BoardModel.findByIdAndDelete({ _id: id })
        res.status(200).send({ msg: "board deleted" });
    } catch (e) {
        console.log(e);
        res.status(400).send({ err: e.message });
    }
})


module.exports = boardRoute;
