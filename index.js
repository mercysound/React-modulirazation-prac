const express = require("express");
const app = express();
require("dotenv").config()
const PORT = process.env.PORT || 5000;
const ejs = require("ejs");
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}))
const mongooseConnect = require("./mongoose-connect/mongodb_connect")

app.get("/", (req, res)=>{
  res.render("landing_page")
});
const studentRouter = require("./routes/student.route"); // StudentRouter import from router folder
app.use("/student", studentRouter);

app.listen(PORT, ()=>{
  console.log("app is listening @ port " + PORT);
})
