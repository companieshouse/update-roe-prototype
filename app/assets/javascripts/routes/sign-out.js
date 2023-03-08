module.exports = function (router) {

	// sign-out page routing
		router.post('/register/sign-out', function(req, res) {
			if (req.session.data['signOut'] == null) {
				// signOut still equals NULL (as it was assigned NULL when the session started), which means nothing has been chosen.
				// So, we then also set signOutFirstTrigger to NO (which means this isn't the first time the page has loaded) and then
				// reload the same page and the in-page IF... THEN conditional statements will ensure the errors will now be shown...
				req.session.data['signOutFirstTrigger'] = 'no';
				res.redirect('/register/sign-out');
			} else if (req.session.data['signOut'] == "yes") {
				// YES has been chosen
				// Reset signOutFirstTrigger to equal YES
				// Reset signOut to NULL
				req.session.data['signOutFirstTrigger'] = 'yes';
				req.session.data['signOut'] == null;
				res.redirect('/register/signed-out');
			} else {
				// Else... NO has been chosen (there's only two options, so it has to have been!)...
				req.session.data['signOutFirstTrigger'] = 'no';
				// We've already figured out the URL for the previous page, and hitting NO will redirect back to this particular page...
				res.redirect(req.session.data.gPreviousLocation);
			}
		})
	}
