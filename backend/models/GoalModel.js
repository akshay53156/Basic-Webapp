const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, // this is the id of the user
        required: true,
        ref: 'User' // this is the name of the model
    },
    text:{
        type: String,
        required: [true, "Please add a goal"],
    }
},{timestamps: true});

module.exports = mongoose.model("Goal", goalSchema);