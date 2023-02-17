function postStatementFilter (router) {
    router.post( '/v2/check-your-answers', function ( req, res ) {
          const boStatement = req.body;    
          if ( boStatement ["boStatement"] === "no" ) {      
              res.redirect( "/v2/beneficial-owner/involved-types-test" );
          } else {
            res.redirect( "/v2/check-your-answers" );
          }
      } );   
  }
  

  module.exports = {postStatementFilter}