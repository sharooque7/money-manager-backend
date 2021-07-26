const path = require("path");

const express = require("express");
const IncEcpController = require("../controller/IncExp");

const router = express.Router();

router.get("/income");
/// money-manager/AddData
router.post("/AddData", IncEcpController.postAddData);
//Query Based on Categories and Divisions
router.post("/QueryData", IncEcpController.queryData);

module.exports = router;
