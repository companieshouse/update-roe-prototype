function postWhoIsFilingFilter (router) {
    router.post( '/v4/oe-checks', function ( req, res ) {
          const whoIsFiling = req.body;    
          if ( whoIsFiling["who-is-filing"] === "agent" ) {      
              res.redirect( "/v4/agent-checks" );
          } else {
            res.redirect( "v4/oe-checks" );
          }
      } );   
  }

  module.exports = {postWhoIsFilingFilter}

  
