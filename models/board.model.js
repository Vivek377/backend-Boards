const mongoose = require("mongoose");

const BoardSchema = mongoose.Schema({
    name: String,
    tasks: Array
})

const BoardModel = mongoose.model("board", BoardSchema);

module.exports = BoardModel;
