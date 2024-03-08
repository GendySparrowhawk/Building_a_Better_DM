const express = require("express");
const router = express.Router();module.exports = router;
const itemControllers = require("../controllers/itemControllers");

router.get("/items", itemControllers.findAllItems);
router.get("/items/:name", itemControllers.findOneItem)

module.exports = router;
