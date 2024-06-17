const express = require("express");
const router = express.Router();

const {getStudentDashboard, getStudentSignUp, getStudentLogin, getRegisterStudentModel} = require("../controllers/student_controller");

router.get("/", getStudentDashboard);

router.get("/signup", getStudentSignUp);

router.get("/login", getStudentLogin);


router.post("/signup", getRegisterStudentModel)

// app.post("/signup", (req, res) => {
//   // console.log(req.body);
//   let form = new studentModel(req.body);
//   form
//     .save()
//     .then(() => {
//       // res.render("signin")
//       res.redirect("/signin");
//       console.log("succesful");
//     })
//     .catch((error) => {
//       res.render("signup", { message: "this was not done successful" });
//       console.log("You have input error prob");
//       console.log(error);
//     });
// });
module.exports = router;