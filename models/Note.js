const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    name: String,
    datetime: {
        type: String,
        required: true
    },
    user_plans: {
        type: String,
        required: true
    },
    user_commits: {
        type: String,
        required: true
    },
    user_overall_mood: {
        type: Number,
    }
})

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;