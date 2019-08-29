const express   = require('express');
const path      = require('path');
const router    = express.Router();
const rootDir   = require('../util/path');

router.get('/',(req,res, next) => {
    // res.sendFile(path.join(rootDir,'views','index.html'));
    res.render('index');
});

module.exports = router;