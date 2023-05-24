function postProtectedFilter (router) {
    router.post( '/v6/trust-filter', function ( req, res ) {
          const secureRegister = req.body;    
          if ( secureRegister["secure-register"] === "yes" ) {      
              res.redirect( "/v6/use-paper-service" );
          } else {
            res.redirect( "/v6/trust-filter" );
          }
      } );   
  }

  module.exports = {postProtectedFilter}