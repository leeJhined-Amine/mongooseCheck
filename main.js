const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const data = require("./data.json");

app.use(express.json());

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

app.post("/", (req, res) => {
  res.json(data);
});

console.log(process.env.MONGO_URI);

app.listen(3000, () =>
  console.log("server listening on: http://localhost:3000")
);

//For the next questions im just gonna type a brief answer, cause it easy and doesn't deserve that effort :)
//to search in a database we just use .find() and it simply works like this: data.find(); same thing for the rest of questions just different function that are already mentioned;
//for the find by id function, we pass in the id as an argument, like this data.findById(id);
//This should be all, in this checkpoint i learned how to use .env, which i guess is the most important thing :D
