// 
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
// 

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here - need to add from 

router.use('/', require('./routes/v1-routes.js'))
router.use('/', require('./routes/v2-routes.js'))
router.use('/', require('./routes/v3-routes.js'))
router.use('/', require('./routes/v4-routes.js'))
router.use('/', require('./routes/v5-routes.js'))
router.use('/', require('./routes/v6-routes.js'))
router.use('/', require('./routes/v7-routes.js'))
router.use('/', require('./routes/v8-routes.js'))
router.use('/', require('./routes/remove-v1.js'))
router.use('/', require('./routes/remove-v2.js'))
router.use('/', require('./routes/remove-v3.js'))





// Clear all data in session
router.post('/clear-data', function (req, res) {
    req.session.data = {}
    res.render('prototype-admin/clear-data-success')
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
