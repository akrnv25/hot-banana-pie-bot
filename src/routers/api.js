const express = require('express');
const sendMessageController = require('../controllers/api/send-message');
const rootController = require('../controllers/api/root');

const router = express.Router();

router.get('', rootController);
router.post('/send-message', sendMessageController);

module.exports = router;
