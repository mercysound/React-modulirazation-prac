const studentModel = require("../models/student_model");

const getStudentSignUp = (req, res)=>{
  res.render("student_signup")
};
const getStudentLogin = (req, res)=>{
  res.render("student_login_page")
};
const getStudentDashboard = (req, res)=>{
  res.render("student_dashboard")
};
const getRegisterStudentModel = (req, res)=>{
  console.log(req.body);
  let form = new studentModel(req.body)
  form.save()
  .then((result)=>{
    console.log(result);
    res.redirect("/student/login")
  })
  .catch((err)=>{
    console.log("I no know where u dey carry me go instead of mongo");
    console.log(err);
  })
};
module.exports = {getStudentSignUp, getStudentLogin, getStudentDashboard, getRegisterStudentModel};