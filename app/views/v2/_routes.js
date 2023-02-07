const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// 2-sign-in.html
router.post('/2-sign-in', function(req, res) {
    res.redirect('3-do-you-want-to-continue');
})

// 3-do-you-want-to-continue.html
router.post('/3-do-you-want-to-continue', function(req, res) {
    res.redirect('4-');
})

// auth-filter.html
router.post('/auth-filter', function(req, res) {
    res.redirect('authentication-code');
})


// Add your routes here - above the module.exports line
module.exports = router

