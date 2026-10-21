const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter()


router.post('/select-prototype', function (req, res) {

  const prototype = req.body.prototype

  if (prototype === '.') {
    res.redirect('/prototype-v1/start')
  }

  else if (prototype === 'phase-3-index') {
    res.redirect('/prototype-v3/start')
  }

  else {
    res.redirect('/index')
  }

})