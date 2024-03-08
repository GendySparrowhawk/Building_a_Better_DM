const express = require('express');
const router = express.Router();
const featController = require('../controllers/featControllers');

router.get("/feats", featController.findAllFeats);
router.get("/feats/:name", featController.findOneFeat);




module.exports = router;