module.exports = function (router) {



    
    // post method for routing, doesn't make use of query strings rather we're identifying by discreet variable as set by 'name' in the component
    router.post('/v1/auth-filter', function(req, res) {
        if (req.session.data['codeFilter'] == 'all') {
            console.log('auth-filter.js ALL'); // print to console to show which radio has been chosen
            res.redirect('/v1/authentication-code');
        } else {
            console.log('auth-filter.js NO or SOME (ELSE)'); // print to console to show which radio has been chosen
            res.render('v1/auth-get');
            }
        } );
    }
    