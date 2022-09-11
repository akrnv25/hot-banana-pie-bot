const express = require('express');
const sendMessageController = require('../controllers/api/send-message');

const router = express.Router();

router.post('send-message', sendMessageController);

module.exports = router;
