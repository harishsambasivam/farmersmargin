const express = require("express");
const { signUp, routerTest } = require("./user_controller");
const router = express.Router();

router.route("/signup").post(signUp);
router.route("/").get(routerTest);

module.exports = router;
