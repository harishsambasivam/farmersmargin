const express = require("express");
const router = express.Router();
const { addFarm, getFarms } = require("./farm_controller");

router.route("/:lon/:lat").get(getFarms);
router.route("/").post(addFarm);

module.exports = router;
