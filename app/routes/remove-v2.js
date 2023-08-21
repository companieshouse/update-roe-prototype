const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter()


// ****** FILTERS *****


// INDEX ******* REMOVE JOURNEY FILTER *******

router.post('/index', function(request, response) {

  var roePrototypeScenario = request.session.data['roe-prototype-scenario']
  if (roePrototypeScenario == "update"){
      response.redirect("/index-update")
  } else {
      response.redirect("/index-remove")
  }
})



// 02 ******* SAVED FILING FILTER *******
router.post('/remove-v2/02-do-you-want-to-continue-with-a-saved-filing', function(request, response) {

  var savedFiling = request.session.data['saved-filing']
  if (savedFiling == "yes"){
      response.redirect("/remove-v2/03-your-filings")
  } else {
      response.redirect("/remove-v2/06b-is-the-overseas-entity-registered-as-the-owner")
  }
})





// 06B ******* ENTITY DISPOSED OF LAND FILTER *******
router.post('/remove-v2/06b-is-the-overseas-entity-registered-as-the-owner', function(request, response) {

  var ownerDisposed = request.session.data['owner-disposed']
  if (ownerDisposed == "yes"){
      response.redirect("/remove-v2/06c-you-cannot-apply-to-remove-this-overseas-entity")
  } else {
      response.redirect("/remove-v2/04-do-any-beneficial-owners-or-managing-officers-have-their-personal-information-protected-at-companies-house")
  }
})




// 04 ******* PROTECTED FILTER *******
router.post('/remove-v2/04-do-any-beneficial-owners-or-managing-officers-have-their-personal-information-protected-at-companies-house', function(request, response) {

  var secureRegister = request.session.data['secure-register']
  if (secureRegister == "yes"){
      response.redirect("/remove-v2/05-youll-need-to-file-an-update-statement-using-the-paper-form")
  } else {
      response.redirect("/remove-v2/06-are-there-any-trusts-involved-in-this-overseas-entity")
  }
})






// 06 ******* TRUSTS INVOLVED FILTER *******
router.post('/remove-v2/06-are-there-any-trusts-involved-in-this-overseas-entity', function(request, response) {
  var trustInvolved = request.session.data['trust-involved']
  var roePrototypeScenario = request.session.data['roe-prototype-scenario']
if (trustInvolved === "yes"){
  response.redirect("/v8/07-youll-need-to-file-an-update-statement-using-the-paper-form")
} else if (roePrototypeScenario === "remove"){
  response.redirect('/remove-v2/08b-before-you-start')
} else {
  response.redirect('/v8/08-before-you-start')
}
})


// // || means 'or' - this is how you would check multiple items e.g. checkboxes (or both)
// } else if (roePrototypeScenario === "value-one" || roePrototypeScenario === "value-two"){

// // && means 'and' - this would only work if both checkboxes were ticked
// } else if (roePrototypeScenario === "value-one" && roePrototypeScenario === "value-two"){















// 14 ******* MAKE ANY CHANGES? FILTER *******

// router.post('/remove-v2/14-do-you-need-to-make-any-changes-to-this-overseas-entity', function(request, response) {

//   var makeChanges = request.session.data['make-changes']
//   if (makeChanges == "yes"){
//       response.redirect("/remove-v2/ADD HERE")
//   } else {
//       response.redirect("/remove-v2/15-has-the-overseas-entity-identified-any-registrable-beneficial-owners")
//   }
// })


// router.get('/remove-v2/19-who-is-completing-this-update', function(req, res) {
//   if (req.session.data['make-changes'] === 'no') {
//     res.render('remove-v2/15b-has-the-overseas-entity-identified-any-registrable-beneficial-owners')
//   } else {
//     res.render('remove-v2/19-who-is-completing-this-update')
//   }
// })



// 18 ******* NO CHANGE: REVIEW THE INFORMATION FILTER *******

router.get('/v8/14-do-you-need-to-make-any-changes-to-this-overseas-entity', function(req, res) {
  if (req.session.data['need-to-change'] === 'yes') {
    res.render('v8/xx-payment') 
  } else {
    res.render('v8/14-do-you-need-to-make-any-changes-to-this-overseas-entity')
  }
})


router.post('/remove-v2/18-review-the-information-in-this-update-statement', function(request, response) {

  var nochangeChange = request.session.data['need-to-change']
  if (nochangeChange == "yes"){
      response.redirect("/remove-v2/xx-payment")
  } else {
      response.redirect("/remove-v2/14-do-you-need-to-make-any-changes-to-this-overseas-entity")
  }
})



// 19 ******* WHO IS COMPLETING THIS UPDATE? FILTER *******

router.get('/v8/21-tell-us-about-the-uk-regulated-agent-that-carried-out-verification-checks', function(req, res) {
  if (req.session.data['who-is-filing'] === 'agent') {
    res.render('v8/20-complete-this-statement-to-confirm-that-verification-checks-have-been-completed')
  } else {
    res.render('v8/21-tell-us-about-the-uk-regulated-agent-that-carried-out-verification-checks')
  }
})




// ceased filter - NEEDS UPDATING

router.get('/v8/submit-pay/check-your-answers', function(req, res) {
  if (req.session.data['bo-update-ceased'] === 'yes') {
    res.render('v8/statements-concept/xx-change-statements-generic')
  } else {
    res.render('v8/submit-pay/check-your-answers')
  }
})



// auth-filter.html - NEEDS UPDATING
router.post('/auth-filter', function(req, res) {
  res.redirect('authentication-code');
})







// 43-individuals-or-entities-involved-in-the-trust.html - NEEDS UPDATING

module.exports = function (router) {
  router.get( '43-individuals-or-entities-involved-in-the-trust', function ( req, res ) {
  	var trustTypes = req.session.data['trustTypes']
    res.render( '47-trusts-associated-with-the-overseas-entity', {
      trustTypes: trustTypes
    })
})
router.post('43-individuals-or-entities-involved-in-the-trust', function (req, res) {
  var trustTypes = req.session.data['trustTypes']

  switch (trustTypes) {
      case "historical":
        res.redirect('/44-tell-us-about-the-former-beneficial-owner');
        console.log('historical');
        break;
      case 'individual-trusts':
        res.redirect('/45-tell-us-about-the-individual');
        console.log('individual');
        break;
      case 'ole-trusts':
        res.redirect('/46-tell-us-about-the-legal-entity');
        console.log('ole');
        break;
  }
})

router.get( '/44-tell-us-about-the-former-beneficial-owner', function ( req, res ) {
  res.render( '44-tell-us-about-the-former-beneficial-owner')
  })
}








// ****** VALIDATION *****


// ******* 23 OE DETAILS VALIDATION ************
router.get('/v8/oe-details', function (req, res) {
  // Set URl
  res.render('v8/oe-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v8/oe-details', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (req.session.data['entity-email'] == '') {
    // No value so add error to array
    errors.push({
      text: 'Enter an email address',
      href: '#entity-email'
    })

    // Re-show page with error value as true so errors will show
    res.render('v8/oe-details', {
      errorEmail: true, 
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v8/beneficial-owner/bo-mo-review')
  }
})




// ******* BENEFICIAL OWNER individual validation *********************
router.get('/v8/trusts/individual', function (req, res) {
  // Set URl
  res.render('v8/trusts/individual', {
    currentUrl: req.originalUrl
  })
})

router.post('/v8/trusts/individual', function (req, res) {
  res.redirect('/v8/trusts/individual-2')
})


// ******* individual-2 validation ********************************
router.get('/v8/trusts/individual-2', function (req, res) {
  // Set URl
  res.render('v8/trusts/individual-2', {
    currentUrl: req.originalUrl
  })
})

router.post('/v8/trusts/individual-2', function (req, res) {
  res.redirect('/v8/trusts/legal-entity')
})


// ******* legal-entity validation ********************************
router.get('/v8/trusts/legal-entity', function (req, res) {
  // Set URl
  res.render('v8/trusts/legal-entity', {
    currentUrl: req.originalUrl
  })
})

router.post('/v8/trusts/legal-entity', function (req, res) {
  res.redirect('/v8/trusts/trust-involved-additions')
})




// ******* bo-individual validation ********************************
router.get('/v8/beneficial-owner/bo-individual', function (req, res) {
  // Set URl
  res.render('v8/beneficial-owner/bo-individual', {
    currentUrl: req.originalUrl
  })
})

router.post('/v8/beneficial-owner/bo-individual', function (req, res) {
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
    res.render('v8/beneficial-owner/bo-individual', {
      errorBoCeased: boCeasedError,
      errorProperty: propertyError,
      errorAddress1: address1Error,
      errorCity: cityError,
      errorCountry: countryError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v8/beneficial-owner/mo')
  }
})






// ******* bo gov validation ********************************
router.get('/v8/beneficial-owner/bo-gov', function (req, res) {
  // Set URl
  res.render('v8/beneficial-owner/bo-gov', {
    currentUrl: req.originalUrl
  })
})
router.post('/v8/beneficial-owner/bo-gov', function (req, res) {
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
    res.redirect('/v8/beneficial-owner/mo')
  }
})






// ******* mo-individual validation ********************************
router.get('/v8/beneficial-owner/mo', function (req, res) {
  // Set URl
  res.render('v8/beneficial-owner/mo', {
    currentUrl: req.originalUrl
  })
})

router.post('/v8/beneficial-owner/mo', function (req, res) {
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
    res.render('v8/beneficial-owner/mo', {
      errorMoCeased: moCeasedError,
      errorProperty: propertyError,
      errorAddress1: address1Error,
      errorCity: cityError,
      errorCountry: countryError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v8/beneficial-owner/involved-types')
  }
})






// ******* trust-details validation ********************************
router.get('/v8/trusts/trust-details', function (req, res) {
  // Set URl
  res.render('v8/trusts/trust-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v8/trusts/trust-details', function (req, res) {
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
    res.render('v8/trusts/trust-details', {
      errorTrustName: trustNameError,
      errorList: errors
    })
  } else {
    res.redirect('/v8/trusts/former-bo')}
})


// ******* delete-trust-warning validation ********************************
router.get('/v8/trusts/delete-trust-warning', function (req, res) {
  // Set URl
  res.render('v8/trusts/delete-trust-warning', {
    currentUrl: req.originalUrl
  })
})

router.post('/v8/trusts/delete-trust-warning', function (req, res) {
  // Make a variable and give it the value from 'x'
  var warningAnswer = req.session.data['delete-trust']

  // Check whether the variable matches a condition
  if (warningAnswer == "yes"){
    // Send user to next page
    res.redirect('/v8/trusts/add-trust-deleted')
  } else {
    // Send user to ineligible page
    res.redirect('/v8/trusts/trust-details')
  }

})


// ******* former-bo validation ********************************
router.get('/v8/trusts/former-bo', function (req, res) {
  // Set URl
  res.render('v8/trusts/former-bo', {
    currentUrl: req.originalUrl
  })
})

router.post('/v8/trusts/former-bo', function (req, res) {
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
    res.render('v8/trusts/former-bo', {
      errorBoStartDay: dayHasError,
      errorBoStartMonth: monthHasError,
      errorBoStartYear: yearHasError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v8/trusts/individual')
  }

})



module.exports=router;
