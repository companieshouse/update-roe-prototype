
const govukPrototypeKit = require('govuk-prototype-kit');
const { postProtectedFilter } = require('../assets/javascripts/routes/protected-filter');
const { postSavedFiling } = require('../assets/javascripts/routes/saved-filing');
const router = govukPrototypeKit.requests.setupRouter()
    
// auth-filter.html
router.post('/auth-filter', function(req, res) {
  res.redirect('authentication-code');
})

postProtectedFilter(router)
postSavedFiling(router)

module.exports=router;
