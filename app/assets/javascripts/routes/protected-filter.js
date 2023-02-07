module.exports = function (router) {


    router.get( '/v2/interrupt-card', function ( req, res ) {
          var secureRegister = req.query.secureRegister;
          if ( secureRegister == "yes" ) {
              res.redirect( "/v2/use-paper-service" );
          } else {
              res.render( 'v2/interrupt-card' );
          }
      } );
  
  }
  
