const express = require('express');
const { getFormResponses, saveFormResponses } = require('./formController');
const router = express.Router();

router.get('/:id/responses', getFormResponses);
router.post('/:id/save', saveFormResponses);

module.exports = router;
