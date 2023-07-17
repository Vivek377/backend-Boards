const mongoose = require("mongoose");

const SubTaskSchema = mongoose.Schema({
    title: String,
    isCompleted: Boolean
})

const SubTaskModel = mongoose.model("subtask", SubTaskSchema);

module.exports = SubTaskModel;
