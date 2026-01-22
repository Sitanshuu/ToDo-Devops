const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        completed: {
            type: String,
            enum: ["true", "false"],
            default: "false",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Todo", TodoSchema, "Todos");
