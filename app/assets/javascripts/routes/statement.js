function postStatementFilter (router) {
    router.post( '/v2/check-your-answers', function ( req, res ) {
          const secureRegister = req.body;    
          if ( secureRegister["boStatement"] === "no" ) {      
              res.redirect( "/v2/beneficial-owners/involved-types-test" );
          } else {
            res.redirect( "/v2/check-your-answers" );
          }
      } );   
  }
  

  module.exports = {postStatementFilter}