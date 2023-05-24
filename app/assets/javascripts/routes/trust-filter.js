function postTrustFilter (router) {
    router.post( '/v6/interrupt-card', function ( req, res ) {
          const trustInvolved = req.body;    
          if ( trustInvolved ["trust-involved"] === "yes" ) {      
              res.redirect( "/v6/use-paper-service-trusts" );
          } else {
            res.redirect( "/v6/interrupt-card" );
          }
      } );   
  }

  module.exports = {postTrustFilter}



