const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const db = require("../models/index");

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcript = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
        password: hashPasswordFromBcript,
        phoneNumber: data.phoneNumber,
      });
      resolve("create new user");
    } catch (e) {
      reject(e);
    }
  });
};
let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewUser,
};
