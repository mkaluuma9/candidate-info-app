const express = require('express');
const router = express.Router();
const candidatesController = require('../controllers/candidatesController');


router.post('/create', candidatesController.createOrUpdateCandidate);
router.get('/', candidatesController.getAllCandidates);
router.delete('/delete', candidatesController.deleteCandidateByEmail);

module.exports = router;
