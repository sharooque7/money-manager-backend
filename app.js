const path = require("path");
const mongoose = require("mongoose");

const dbUrl =
  "mongodb+srv://practice:Mongo7$@practice.a2eyo.mongodb.net/MoneyManager?retryWrites=true&w=majority";

const cors = require("cors");
const express = require("express");

const app = express();
const port = process.env.PORT || 4000;
const host = '0.0.0.0';
const routes = require("./router/route");

app.use(express.json());
app.use(cors());

//Routing
app.use("/moneymanager", routes);

app.use("/",(req,res,next)=>{
  res.json({message:"Hello"}) 
});

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(port,host, () => console.log(`app is running on the ${port}`));
    console.log("connected");
  })
  .catch((err) => console.log(err));
