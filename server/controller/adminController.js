
const AdminModel = require("../model/adminModel");
const UserModel = require("../model/userModel");
const TaskModel = require("../model/userTask")
const RandomPass = require("../middleware/randampassword");
const nodemailer = require("nodemailer");

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const admin = await AdminModel.findOne({ email: email });

  if (!admin) {
    res.status(400).send({ msg: "Invalid email" });
  }

  if (admin.password != password) {
    res.status(400).send({ msg: "Invalid password" });
  }
  res.send({ admin, msg: "login succesfully!!" });
};

const CreateUser = async (req, res) => {
  const { name, email, post } = req.body;
  const UserPassword = RandomPass.randomPassword();
  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "satyapal626897@gmail.com",
      pass: "wcma wlxa yvun hwxf",
    },
  });

  const mailDetails = {
    from: "satyapal626897@gmail.com",
    to: email,
    subject: "User Login Details!",
    text: `Hello ${name},

Your account has been created.

Email: ${email}
Password: ${UserPassword}

Please change your password after login.

Regards,  
Team`,
  };

  const user = await UserModel.create({
    name: name,
    email: email,
    post: post,
    password: UserPassword,
  });

  mailTransporter.sendMail(
    mailDetails,

    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent");
      }
    },
  );

  res.send({ msg: "Email successfully sent!!" });
};

const getUserData = async (req, res) => {
  const User = await UserModel.find()
  res.status(200).send(User)
}

const assignTask = async (req, res) => {
  const { userid, usertask, days, } = req.body;
  const task = await TaskModel.create({
    usertask: usertask,
    days: days,
    userid: userid
  })
  res.send({ msg: "okkkkk" });
}

const getTaskReport = async (req, res) => {
  const task = await TaskModel.find().populate("userid");
  res.send(task);
}

module.exports = {
  userLogin,
  CreateUser,
  getUserData,
  assignTask,
  getTaskReport
};
