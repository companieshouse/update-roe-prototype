function postIdentifyFilter (router) {
    router.post( '/v6/beneficial-owner/statement', function ( req, res ) {
          const secureRegister = req.body;    
          if ( secureRegister["boIdentify"] === "yes" ) {      
              res.redirect( "/v6/beneficial-owner/involved-types-test" );
          } else {
            res.redirect( "/v6/beneficial-owner/statement" );
          }
      } );   
  }

  module.exports = {postIdentifyFilter}