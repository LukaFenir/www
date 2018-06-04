const express = require('express');
const contentfulApi = require('./contentful');

const router = express.Router();

router.use('/contentful', contentfulApi);


module.exports = router;
