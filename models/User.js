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
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
