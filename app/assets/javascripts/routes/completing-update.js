function postWhoIsFilingFilter (router) {
    router.post( '/v64/oe-checks', function ( req, res ) {
          const whoIsFiling = req.body;    
          if ( whoIsFiling["who-is-filing"] === "agent" ) {      
              res.redirect( "/v6/agent-checks" );
          } else {
            res.redirect( "v6/oe-checks" );
          }
      } );   
  }

  module.exports = {postWhoIsFilingFilter}

  
