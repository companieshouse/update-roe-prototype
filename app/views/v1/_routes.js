const express = require('express');
const { countBy } = require('lodash');
const router = express.Router()


// 2-sign-in.html
router.post('/2-sign-in', function(req, res) {
    res.redirect('3-do-you-want-to-continue');
})

// 3-do-you-want-to-continue.html
router.post('/3-do-you-want-to-continue', function(req, res) {
    res.redirect('4-');
})
// Add your routes here - above the module.exports line
module.exports = router
