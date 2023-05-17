
const govukPrototypeKit = require('govuk-prototype-kit');
const { postProtectedFilter } = require('../assets/javascripts/routes/protected-filter');
const { postSavedFiling } = require('../assets/javascripts/routes/saved-filing');
const { postInvolvedFilter } = require('../assets/javascripts/routes/involved-types');
const { postIdentifyFilter } = require('../assets/javascripts/routes/identify');
const { postStatementFilter } = require('../assets/javascripts/routes/statement');
const { postSignOut } = require('../assets/javascripts/routes/sign-out');
const { postTrustFilter } = require('../assets/javascripts/routes/trust-filter');



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
postTrustFilter(router)



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







// ******* trust-details validation ********************************
router.get('/v4/trusts/trust-details', function (req, res) {
  // Set URl
  res.render('v4/trusts/trust-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/trusts/trust-details', function (req, res) {
  var trustNameError = false;
  var errors = [];

  if (req.session.data['trust-name'] === '') {
    trustNameError = true;
    errors.push({
      text: 'Enter the name of the trust',
      href: '#trust-name'
    })
  }
    
  if (errors.length != 0) {
    res.render('v4/trusts/trust-details', {
      errorTrustName: trustNameError,
      errorList: errors
    })
  } else {
    res.redirect('/v4/trusts/former-bo')}
})


// ******* delete-trust-warning validation ********************************
router.get('/v4/trusts/delete-trust-warning', function (req, res) {
  // Set URl
  res.render('v4/trusts/delete-trust-warning', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/trusts/delete-trust-warning', function (req, res) {
  // Make a variable and give it the value from 'who-is-filing'
  var warningAnswer = req.session.data['delete-trust']

  // Check whether the variable matches a condition
  if (warningAnswer == "yes"){
    // Send user to next page
    res.redirect('/v4/trusts/add-trust-deleted')
  } else {
    // Send user to ineligible page
    res.redirect('/v4/trusts/trust-details')
  }

})


// ******* former-bo validation ********************************
router.get('/v4/trusts/former-bo', function (req, res) {
  // Set URl
  res.render('v4/trusts/former-bo', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/trusts/former-bo', function (req, res) {
  // Create empty array and set error variables to false
  var errors = []
  var dayHasError = false
  var monthHasError = false
  var yearHasError = false

  // Check if user has filled out a day
  if (req.session.data['bo-start-day'] === '') {
    // No value so add error to array
    dayHasError = true
    errors.push({
      text: 'The date must include a day',
      href: '#bo-start-day'
    })
  }

  // Check if user has filled out a month
  if (req.session.data['bo-start-month'] === '') {
    // No value so add error to array
    monthHasError = true
    errors.push({
      text: 'The date must include a month',
      href: '#bo-start-month'
    })
  }

  // Check if user has filled out a year
  if (req.session.data['bo-start-year'] === '') {
    // No value so add error to array
    yearHasError = true
    errors.push({
      text: 'The date must include a year',
      href: '#bo-start-year'
    })
  }

  // Check if ether filed not filled out
  if (errors.length != 0) {
    // Re-show page with error value as true so errors will show
    res.render('v4/trusts/former-bo', {
      errorBoStartDay: dayHasError,
      errorBoStartMonth: monthHasError,
      errorBoStartYear: yearHasError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v4/trusts/individual')
  }

})


// ******* individual validation ********************************
router.get('/v4/trusts/individual', function (req, res) {
  // Set URl
  res.render('v4/trusts/individual', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/trusts/individual', function (req, res) {
  res.redirect('/v4/trusts/individual-2')
})


// ******* individual-2 validation ********************************
router.get('/v4/trusts/individual-2', function (req, res) {
  // Set URl
  res.render('v4/trusts/individual-2', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/trusts/individual-2', function (req, res) {
  res.redirect('/v4/trusts/legal-entity')
})


// ******* legal-entity validation ********************************
router.get('/v4/trusts/legal-entity', function (req, res) {
  // Set URl
  res.render('v4/trusts/legal-entity', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/trusts/legal-entity', function (req, res) {
  res.redirect('/v4/trusts/trust-involved-additions')
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
  // Create variables
  var propertyError = false;
  var address1Error = false;
  var cityError = false;
  var countryError = false;
  var boCeasedError = false;
  var errors = [];

  // Check if user has filled out a value
  if (req.session.data['usual-residential-address-property-name-number'] === '') {
    // No value so add error to array
    propertyError = true;
    errors.push({
      text: 'Enter the property name or number',
      href: '#usual-residential-address-property-name-number'
    })
  }

  // Check if user has filled out a value
  if (req.session.data['usual-residential-address-line-1'] === '') {
    // No value so add error to array
    address1Error = true;
    errors.push({
      text: 'Enter address line 1',
      href: '#usual-residential-address-line-1'
    })
  }

  // Check if user has filled out a value
  if (req.session.data['usual-residential-address-city-town'] === '') {
    // No value so add error to array
    cityError = true;
    errors.push({
      text: 'Enter the city or town',
      href: '#usual-residential-address-city-town'
    })
  }

  // Check if user has filled out a value
  if (req.session.data['country'] === '') {
    // No value so add error to array
    countryError = true;
    errors.push({
      text: 'Enter the country',
      href: '#country'
    })
  }

  // Check if user has filled out a value
  if (typeof req.session.data['bo-ceased'] === 'undefined') {
    // No value so add error to array
    boCeasedError = true;
    errors.push({
      text: 'Select yes if they are still a registrable beneficial owner',
      href: '#bo-ceased'
    })
  }
    
  if (errors.length != 0) {
  // Re-show page with error value as true so errors will show
    res.render('v4/beneficial-owner/bo-individual', {
      errorBoCeased: boCeasedError,
      errorProperty: propertyError,
      errorAddress1: address1Error,
      errorCity: cityError,
      errorCountry: countryError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v4/beneficial-owner/mo')
  }
})






// ******* bo gov validation ********************************
router.get('/v4/beneficial-owner/bo-gov', function (req, res) {
  // Set URl
  res.render('v4/beneficial-owner/bo-gov', {
    currentUrl: req.originalUrl
  })
})
router.post('/v4/beneficial-owner/bo-gov', function (req, res) {
  // Create variables
  var boCeasedError = false;

   // Check if user has filled out a value
  if (req.session.data['bo-gov-ceased'] === '') {
    // No value so add error to array
    boCeasedError = true;
    errors.push({
      text: 'Select yes if they are still a registrable beneficial owner',
      href: '#bo-gov-ceased'
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v4/beneficial-owner/mo')
  }
})






// ******* mo-individual validation ********************************
router.get('/v4/beneficial-owner/mo', function (req, res) {
  // Set URl
  res.render('v4/beneficial-owner/mo', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/beneficial-owner/mo', function (req, res) {
  // Create variables
  var propertyError = false;
  var address1Error = false;
  var cityError = false;
  var countryError = false;
  var moCeasedError = false;
  var errors = [];

  // Check if user has filled out a value
  if (req.session.data['managing-officer-usual-residential-address-property-name-number'] === '') {
    // No value so add error to array
    propertyError = true;
    errors.push({
      text: 'Enter the property name or number',
      href: '#managing-officer-usual-residential-address-property-name-number'
    })
  }

  // Check if user has filled out a value
  if (req.session.data['managing-officer-usual-residential-address-line-1'] === '') {
    // No value so add error to array
    address1Error = true;
    errors.push({
      text: 'Enter address line 1',
      href: '#managing-officer-usual-residential-address-line-1'
    })
  }

  // Check if user has filled out a value
  if (req.session.data['managing-officer-usual-residential-address-city-town'] === '') {
    // No value so add error to array
    cityError = true;
    errors.push({
      text: 'Enter the city or town',
      href: '#managing-officer-usual-residential-address-city-town'
    })
  }

  // Check if user has filled out a value
  if (req.session.data['country'] === '') {
    // No value so add error to array
    countryError = true;
    errors.push({
      text: 'Enter the country',
      href: '#country'
    })
  }

  // Check if user has filled out a value
  if (typeof req.session.data['mo-ceased'] === 'undefined') {
    // No value so add error to array
   moCeasedError = true;
    errors.push({
      text: 'Select yes if they are still a managing officer',
      href: '#mo-ceased'
    })
  }
    
  if (errors.length != 0) {
  // Re-show page with error value as true so errors will show
    res.render('v4/beneficial-owner/mo', {
      errorMoCeased: moCeasedError,
      errorProperty: propertyError,
      errorAddress1: address1Error,
      errorCity: cityError,
      errorCountry: countryError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v4/beneficial-owner/involved-types')
  }
})

// no change routes

router.get('/v5/verification/completing-update', function(req, res) {
  if (req.session.data['no-change'] === 'no') {
    res.render('v5/no-change/04-review-details')
  } else {
    res.render('v5/verification/completing-update')
  }
})

router.get('/v5/no-change/05-verify-check', function(req, res) {
  if (req.session.data['need-to-change'] === 'yes') {
    res.render('v5/no-change/02-bo-identified')
  } else {
    res.render('v5/no-change/05-verify-check')
  }
})


router.get('/v5/no-change/xx-completing-update', function(req, res) {
  if (req.session.data['verify-check'] === 'no') {
    res.render('v5/no-change/06-not-verified-instructions')
  } else {
    res.render('v5/no-change/xx-completing-update')
  }
})

/*router.get('/v5/verification/completing-update', function (req, res) {
  if (req.session.data['no-change'] === 'no') {
    res.render('v5/no-change/04-review-details')
  } else {
    res.render('v5/verification/completing-update')
  }
})

router.get('/v5/submit-pay/how-to-pay', function(req, res) {
  if (req.session.data['need-to-change'] === 'no') {
    res.render('v5/no-change/02-bo-identified')
  } else {
    res.render('v5/submit-pay/how-to-pay')
  }
})

router.get('/v5/no-change/xx-completing-update', function(req, res) {
  if (req.session.data['verify-check'] === 'no') {
    res.render('v5/no-change/06-not-verified-instructions')
  } else {
    res.render('v5/no-change/xx-completing-update')
  }
})*/

// new statements routes

router.get('/v5/statements-concept/bo-identified', function(req, res) {
  if (req.session.data['statementConceptBo'] === 'change-info') {
    res.render('v5/statements-concept/involved-types')
  } else {
    res.render('v5/statements-concept/bo-identified')
  }
})

router.get('/v5/statements-concept/bo-new-ceased', function(req, res) {
  if (req.session.data['statementsCeased'] === 'change-info') {
    res.render('v5/statements-concept/involved-types')
  } else {
    res.render('v5/statements-concept/bo-new-ceased')
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
