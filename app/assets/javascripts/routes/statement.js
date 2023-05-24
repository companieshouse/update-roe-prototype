function postStatementFilter (router) {
    router.post( '/v6/check-your-answers', function ( req, res ) {
          const boStatement = req.body;    
          if ( boStatement ["boStatement"] === "no" ) {      
              res.redirect( "/v6/beneficial-owner/involved-types-test" );
          } else {
            res.redirect( "/v6/check-your-answers" );
          }
      } );   
  }
  

  module.exports = {postStatementFilter}