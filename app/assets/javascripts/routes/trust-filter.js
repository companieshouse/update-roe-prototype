function postTrustFilter (router) {
    router.post( '/v5/interrupt-card', function ( req, res ) {
          const trustInvolved = req.body;    
          if ( trustInvolved ["trust-involved"] === "yes" ) {      
              res.redirect( "/v5/use-paper-service-trusts" );
          } else {
            res.redirect( "/v5/interrupt-card" );
          }
      } );   
  }

  module.exports = {postTrustFilter}



