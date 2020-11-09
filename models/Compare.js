const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompareSchema = new Schema({
    name: String,
    time_stamp: {
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
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Note"
        }
    ]
})

const Compare = mongoose.model("Compare", CompareSchema);

module.exports = Compare;