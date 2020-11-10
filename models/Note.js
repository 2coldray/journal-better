const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    name: String,
    datetime: {
        type: String,
        // required: true
    },
    user_plans: {
        type: String,
        required: true
    },
    user_overall_mood: {
        type: Number,
    },
    compare: {
        type: Schema.Types.ObjectId,
        ref: "Compare"
    }
})

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;