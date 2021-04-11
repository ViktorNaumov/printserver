const express = require("express");
const router = express.Router();
const controller = require("../controllers/request")

router.post("/datarequest",controller.request)

module.exports = router;