const mongoose = require("mongoose");

// UserSchema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  "First Name": {
    type: String,
    required: true
  },
  "Last Name": {
    type: String,
    required: true
  },
  "Email": {
    type: String,
    required: true
  },
  status: Number
});

let User = mongoose.model("User", UserSchema);

module.exports =User

