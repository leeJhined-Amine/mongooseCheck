const { model } = require("mongoose");
module.exports = mongoose.model("User", {
  name: String,
  age: Number,
  favFood: Array,
});
