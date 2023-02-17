function postIdentifyFilter (router) {
    router.post( '/v2/beneficial-owner/statement', function ( req, res ) {
          const secureRegister = req.body;    
          if ( secureRegister["boIdentify"] === "yes" ) {      
              res.redirect( "/v2/beneficial-owner/involved-types-test" );
          } else {
            res.redirect( "/v2/beneficial-owner/statement" );
          }
      } );   
  }

  module.exports = {postIdentifyFilter}