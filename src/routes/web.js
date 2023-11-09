const express = require('express');
const {getHomepage, getInfo, getAbout} = require('../controllers/homeController');
const router = express.Router();


router.get('/', getHomepage);
router.get('/info', getInfo);
router.get('/about', getAbout);
  
module.exports = router;