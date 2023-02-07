

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
    


    

    // AUTH FILTER: Run this code when a form is submitted to 'auth-filter'
router.post('/v1/auth-filter', function (req, res) {

    // Make a variable and give it the value from 'code-filter'
    var codeFilter = req.session.data['code-filter']
  
    // Check whether the variable matches a condition
    if (codeFilter == "yes"){
      // Send user to next page
      res.redirect('/v1/authentication-code')
    } else {
      // Send user to ineligible page
      res.redirect('/v1/auth-get')
    }
  
  })



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

module.exports=router;
