// 
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
// 

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()



// Add your routes here - need to add from 

// router.use('/', require('./routes/v1-routes.js'))
// router.use('/', require('./routes/v2-routes.js'))
// router.use('/', require('./routes/v3-routes.js'))
// router.use('/', require('./routes/v4-routes.js'))
// router.use('/', require('./routes/v5-routes.js'))
// router.use('/', require('./routes/v6-routes.js'))
// router.use('/', require('./routes/v7-routes.js'))
// router.use('/', require('./routes/v8-routes.js'))
// router.use('/', require('./routes/remove-v1.js'))
// router.use('/', require('./routes/remove-v2.js'))
// router.use('/', require('./routes/remove-v3.js'))
// router.use('/', require('./routes/remove-v4.js'))
// router.use('/', require('./routes/remove-v5.js'))
// router.use('/', require('./routes/remove-v6.js'))
router.use('/', require('./routes/v15-routes.js'))

router.use('/', require('./routes/remove-phase3-v1.js'))



// Clear all data in session
router.post('/manage-phase3-v2/04-do-any-beneficial-owners-or-managing-officers-have-their-personal-information-protected-at-companies-house', function(req, res) {

  var secureRegister = req.session.data['secure-register']

  if (secureRegister === 'yes') {
    res.redirect('/manage-phase3-v2/05-youll-need-to-file-an-update-statement-using-the-paper-form')
  } else {
    res.redirect('/manage-phase3-v2/08-before-you-start')
  }

})

router.post('/clear-data', function (req, res) {
    req.session.data = {}
    res.render('prototype-admin/clear-data-success')
  })

  router.post('/manage-phase3-v2/14-do-you-need-to-make-any-changes-to-this-overseas-entity', function(req, res) {

  console.log('TEST ROUTE WORKING')

  if (req.session.data['make-changes'] === 'yes') {
    res.redirect('/manage-phase3-v2/19-who-is-completing-this-update-1')
  } else {
    res.redirect('/manage-phase3-v2/15-has-the-overseas-entity-identified-any-registrable-beneficial-owners')
  }

})



router.post('/manage-phase3-v2/19-who-is-completing-this-update-1', function(req, res) {

  var whoIsFiling = req.session.data['who-is-filing']

  if (whoIsFiling === 'agent') {
    res.redirect('/manage-phase3-v2/20-complete-this-statement-to-confirm-that-verification-checks-have-been-completed')
  } else {
    res.redirect('/manage-phase3-v2/21-tell-us-about-the-uk-regulated-agent-that-carried-out-verification-checks')
  }

})

router.post('/manage-phase3-v2/do-you-own-any-land', function(req, res) {

  var makeChanges = req.session.data['make-changes']

  if (makeChanges === 'yes') {
    res.redirect('/manage-phase3-v2/location-of-land')
  } else {
    res.redirect('/manage-phase3-v2/36-check-your-answers-before-submitting')
  }

})

module.exports = router



// const express = require('express')
// const router = express.Router()

// // Add your routes here - above the module.exports line

// // Import V2 routes
// router.use('/v2/', (req, res, next) => {
//   return require(`./views/v2/_routes`)(req, res, next);
// })

// // Import V1 routes
// router.use('/v1/', (req, res, next) => {
//   return require(`./views/v1/_routes`)(req, res, next);
// })

// // SET GLOBAL PREVIOUS PAGE
// router.use('/', (req, res, next) => {
//   req.session.data.gPreviousLocation = req.get('Referrer');
//   req.session.data.gCurrentLocation = req.originalUrl;
//   console.log('gPreviousLocation was : ' + req.session.data.gPreviousLocation);
//   console.log('gCurrentLocation is   : ' + req.session.data.gCurrentLocation);
//   next();
// });

// // GET SPRINT NAME - useful for relative templates
// router.use('/', (req, res, next) => {
//     res.locals.currentURL = req.originalUrl; //current screen
//     res.locals.prevURL = req.get('Referrer'); // previous screen
//     console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
//     next();
//   });

// module.exports = router

// Show session data and URLs in the terminal  
router.use((req, res, next) => {  
  const log = {  
    method: req.method,  
    url: req.originalUrl,  
    data: req.session.data  
  }  
  console.log(JSON.stringify(log, null, 2))  
  next()  
}) 


router.post('/select-prototype', function (req, res) {

  const prototype = req.body.PrototypeChoice

  if (prototype === 'original') {
    res.redirect('/index-2')
  }

  else if (prototype === 'Phase3') {
    res.redirect('/phase-3-index')
  }

  else {
    res.redirect('/')
  }

})