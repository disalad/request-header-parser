const router = require('express').Router();
const WhoamiController = require('../controllers/whoami');

router.get('/whoami', WhoamiController.parseHeader);

module.exports = router;
