
const govukPrototypeKit = require('govuk-prototype-kit');
const { postProtectedFilter } = require('../assets/javascripts/routes/protected-filter');
const { postSavedFiling } = require('../assets/javascripts/routes/saved-filing');
const { postInvolvedFilter } = require('../assets/javascripts/routes/involved-types');
const { postIdentifyFilter } = require('../assets/javascripts/routes/identify');
const { postStatementFilter } = require('../assets/javascripts/routes/statement');
const { postSignOut } = require('../assets/javascripts/routes/sign-out');

const router = govukPrototypeKit.requests.setupRouter()
    
// auth-filter.html
router.post('/auth-filter', function(req, res) {
  res.redirect('authentication-code');
})

postProtectedFilter(router)
postSavedFiling(router)
postInvolvedFilter(router)
postIdentifyFilter(router)
postStatementFilter(router)
postSignOut(router)


// ******* oe-details validation ********************************
router.get('/v3/oe-details', function (req, res) {
  // Set URl
  res.render('v3/oe-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v3/oe-details', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (req.session.data['entity-email'] === '') {
    // No value so add error to array
    errors.push({
      text: 'Enter an email address',
      href: '#entity-email'
    })

    // Re-show page with error value as true so errors will show
    res.render('v3/oe-details', {
      errorEmail: true,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v3/statements/bo-identified')
  }
})


// ******* bo-individual validation ********************************
router.get('/v3/beneficial-owner/bo-individual', function (req, res) {
  // Set URl
  res.render('v3/beneficial-owner/bo-individual', {
    currentUrl: req.originalUrl
  })
})

router.post('/v3/beneficial-owner/bo-individual', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['bo-ceased'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select yes if they are still a registrable beneficial owner',
      href: '#bo-ceased'
    })

    // Re-show page with error value as true so errors will show
    res.render('v3/beneficial-owner/bo-individual', {
      errorBoCeased: true,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v3/beneficial-owner/mo')
  }
})


module.exports=router;
