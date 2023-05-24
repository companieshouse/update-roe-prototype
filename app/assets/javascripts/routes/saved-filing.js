function postSavedFiling (router) {
    router.post( '/v6/protected-filter', function ( req, res ) {
          const startingNew = req.body;    
          if ( startingNew["starting-new"] === "yes" ) {      
              res.redirect( "/v6/your-filings" );
          } else {
            res.redirect( "/v6/protected-filter" );
          }
      } );   
  }

  module.exports = {postSavedFiling}


