const express = require("express");
const mongoose = require("mongoose");

const userRouter = require ('./routes/user.controller')
const productRouter = require ('./routes/product.controller')

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/bootcamp")
  .then(() => console.log("connected to MongoDB"))
  .catch((error) => console.log(`Can't connect to MongoDB. ${error}`));



  app.use("/users", userRouter);
  app.use("/products", productRouter);

app.listen(5000, () => console.log("App is listening at port 5000"));
