

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
    
    


// Auth filter.html
router.post('/auth-filter', function(req, res) {
  res.redirect('authentication-code');
})



module.exports=router;
