function postSavedFiling (router) {
    router.post( '/v6/protected-filter', function ( req, res ) {
          const savedFiling = req.body;    
          if ( savedFiling["saved-filing"] === "yes" ) {      
              res.redirect( "/v6/your-filings" );
          } else {
            res.redirect( "/v6/protected-filter" );
          }
      } );   
  }

  module.exports = {postSavedFiling}


