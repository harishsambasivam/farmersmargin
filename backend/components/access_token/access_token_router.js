const express = require("express");
const router = express.Router();
const { getMapBoxAccessToken } = require("./access_token_controller");

router.route("/mapbox").get(getMapBoxAccessToken);

module.exports = router;
