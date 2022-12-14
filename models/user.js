const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
  admin: {
    type: Boolean,
  },
  location: String,
  phone: String,
  picture: String,
});

module.exports = mongoose.model("User", userSchema);
