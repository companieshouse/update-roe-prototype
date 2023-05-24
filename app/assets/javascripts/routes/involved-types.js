function postInvolvedFilter (router) {
    router.post( '/v6/beneficial-owner/involved-types', function ( req, res ) {
      var boType = req.session.data['boType']
      res.render( 'v6/beneficial-owner/involved-types', {
        boType: boType
      })
  })
  router.post('/v6/beneficial-owner/involved-types', function (req, res) {
    var boType = req.session.data['boTypes']
  
    switch (boType) {
        case "beneficialTypesIndividual":
          res.redirect('/v6/beneficial-owner/bo-individual');
          console.log('beneficialTypesIndividual');
          break;
        case 'beneficialTypesOther':
          res.redirect('/v6/beneficial-owner/bo-ole');
          console.log('beneficialTypesOther');
          break;
        case 'beneficialTypesGov':
          res.redirect('/v6/beneficial-owner/bo-ole');
          console.log('beneficialTypesGov');
          break;
    }
  })
  
  // router.get( '/register/trusts/trust-historical-beneficial-owner', function ( req, res ) {
  //   res.render( 'register/trusts/trust-historical-beneficial-owner')
  //   })
  }
  
  module.exports = {postInvolvedFilter}
  