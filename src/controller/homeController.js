const db = require("../models/index");
const CRUDService = require("../service/CRUDservice");

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
//         email: data.email,
//         firstName: data.firstName,
//         lastName: data.lastName,
//         address: data.address,
//         gender: data.gender === "1" ? true : false,
//         roleId: data.roleId,
//         password: hashPasswordFromBcript,
//         phoneNumber: data.phoneNumber,
let postCRUD = async function (req, res) {
  req.body.email = "abcxyz@abc";
  req.body.firstName = "vu";
  req.body.lastName = "giang";
  req.body.address = "giao chau";
  req.body.gender = 1;
  req.body.roleId = "131";
  req.body.password = "jdadjadjaiosdjoaisdasi";
  req.body.phoneNumber = "013123112312";

  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  res.send("okela");
};
let getCRUD = (req, res) => {
  res.send("hello CRUD");
};

module.exports = {
  getHomePage,
  postCRUD,
  getCRUD,
};
