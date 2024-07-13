const express = require('express');
const router = express.Router();
const candidatesController = require('../controllers/candidatesController');


router.post('/create', candidatesController.createOrUpdateCandidate);

module.exports = router;