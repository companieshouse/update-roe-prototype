
    // AUTH FILTER: Run this code when a form is submitted to 'auth-filter'
    router.post('/v6/auth-filter', function (req, res) {

        // Make a variable and give it the value from 'code-filter'
        var codeFilter = req.session.data['code-filter']
      
        // Check whether the variable matches a condition
        if (codeFilter == "yes"){
          // Send user to next page
          res.redirect('/v6/authentication-code')
        } else {
          // Send user to ineligible page
          res.redirect('/v6/auth-get')
        }
      
      })


