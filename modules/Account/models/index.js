const mongoose = require("mongoose");

const account = mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
  },
  user: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
  },
  userId: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isReset: {
    type: Boolean,
  },
  name: {
    type: String,
    required: true,
  },
  Identify: {
    type: Number,
  },
  address: {
    type: String,
  },
  sexual: {
    type: String,
    default: "male",
  },
}, { collection: 'Account' });

module.exports = mongoose.model("Account", account);
