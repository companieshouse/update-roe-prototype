function postSavedFiling (router) {
    router.post( '/v2/protected-filter', function ( req, res ) {
          const startingNew = req.body;    
          if ( startingNew["starting-new"] === "yes" ) {      
              res.redirect( "/v2/your-filings" );
          } else {
            res.redirect( "/v2/protected-filter" );
          }
      } );   
  }

  module.exports = {postSavedFiling}


