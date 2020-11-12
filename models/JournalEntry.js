const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JournalEntrySchema = new Schema({
    entry: {
        type: String,
        required: true,
    },
    datetime: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const JournalEntry = mongoose.model("JournalEntry", JournalEntrySchema);

module.exports = JournalEntry;