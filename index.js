const express = require("express");
const mongoose = require("mongoose");

// mongoose.set("strictQuery", false);

const studentsRouter = require('./students')

const app = express();
app.use (express.json());
app.use('/', studentsRouter)


mongoose
  .connect("mongodb+srv://rampsad:saurab@cluster0.dk8kwfq.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("connected");
  })
    .catch((err) => console.log("fail",err));

  
// const schema = new mongoose.Schema({
//     name:String,
// });
// const User = mongoose.model("user", schema)


  app.listen(3000, () => {
    console.log("listening at port 3000");
  });


