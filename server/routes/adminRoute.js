const express = require("express");
const route = express.Router();
const adminController = require("../controller/adminController");

route.post("/userlogin",adminController.userLogin);
route.post("/createuser",adminController.CreateUser);
route.get("/getuserdata",adminController.getUserData);
route.post("/assigntask", adminController.assignTask);
route.get("/gettaskreport",  adminController.getTaskReport);


module.exports=route;