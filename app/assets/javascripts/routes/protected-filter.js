function postProtectedFilter (router) {
    router.post( '/v2/interrupt-card', function ( req, res ) {
          const secureRegister = req.body;    
          if ( secureRegister["secure-register"] === "yes" ) {      
              res.redirect( "/v2/use-paper-service" );
          } else {
            res.redirect( "/v2/interrupt-card" );
          }
      } );   
  }

  module.exports = {postProtectedFilter}