const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  emailAddress: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
  compare: [
    {
      type: Schema.Types.ObjectId,
      ref: "Compare",
    },
  ],
  journal: [
    {
      type: Schema.Types.ObjectId,
      ref: "JournalEntry"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
