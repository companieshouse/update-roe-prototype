
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



// ******* WHO IS FILING FILTER *******
router.post('/v4/verification/completing-update', function (req, res) {

  // Make a variable and give it the value from 'who-is-filing'
  var whoIsFiling = req.session.data['who-is-filing']

  // Check whether the variable matches a condition
  if (whoIsFiling == "agent"){
    // Send user to next page
    res.redirect('/v4/verification/agent-checks')
  } else {
    // Send user to ineligible page
    res.redirect('/v4/verification/oe-checks')
  }

})


// ******* oe-details validation ********************************
router.get('/v4/oe-details', function (req, res) {
  // Set URl
  res.render('v4/oe-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/oe-details', function (req, res) {
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
    res.render('v4/oe-details', {
      errorEmail: true,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v4/statements/bo-identified')
  }
})


// ******* bo-individual validation ********************************
router.get('/v4/beneficial-owner/bo-individual', function (req, res) {
  // Set URl
  res.render('v4/beneficial-owner/bo-individual', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/beneficial-owner/bo-individual', function (req, res) {
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
    res.render('v4/beneficial-owner/bo-individual', {
      errorBoCeased: true,
      // errorHomeAddressLine1: true,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v4/beneficial-owner/mo')
  }
})





// router.post('/v4/beneficial-owner/bo-individual', function (req, res) {
//   // Create empty array
//   var errors = []

//   // Check if user has filled out a value
//   if (typeof req.session.data['usual-residential-address-line-1'] === 'undefined') {
//     // No value so add error to array
//     errors.push({
//       text: 'Enter an address',
//       href: '#usual-residential-address-line-1'
//     })

//     // Re-show page with error value as true so errors will show
//     res.render('v4/beneficial-owner/bo-individual', {
//       errorHomeAddressLine1: true,
//       errorList: errors
//     })
//   } else {
//     // User inputted value so move to next page
//     res.redirect('/v4/beneficial-owner/mo')
//   }
// })




// if (req.session.data['usual-residential-address-line-1'] === '') {
//   homeAddressLine1HasError = true
//   errors.push({
//     text: "Enter a home address",
//     href: '#usual-residential-address-line-1'
//   })
// }
// if (req.session.data['usual-residential-address-city-town'] === '') {
//   homeCityHasError = true
//   errors.push({
//     text: "Enter a city or town",
//     href: '#usual-residential-address-city-town'
//   })
// }
// if (req.session.data['country'] === '') {
//   countryHasError = true
//   errors.push({
//     text: "Enter the individual person's home country",
//     href: '#country'
//   })
// }




module.exports=router;
