const express = require("express");
const homeController = require("../controller/homeController");
let router = express.Router();

const db = require("../models/index");

let initWebRouters = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/post-crud", homeController.postCRUD);
  router.get("/crud", homeController.getCRUD);

  return app.use("/", router);
};
module.exports = initWebRouters;
