const mongoose = require("mongoose");
let URI = process.env.MONGO_URI;
const mongooseConnection = mongoose.connect(URI)
.then((res)=>{
  console.log("Mongoose has connected");
  // console.log(res);
})
.catch((err)=>{
  console.log("Mongoose can't connect");
  console.log(err);
});

module.exports = mongooseConnection