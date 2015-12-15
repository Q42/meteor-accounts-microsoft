Accounts.addAutopublishFields({

    forLoggedInUser: _.map(
        // publish access token since it can be used from the client
        Microsoft.whitelistedFields.concat(['accessToken', 'expiresAt']), // don't publish refresh token
        function (subfield) { return 'services.microsoft.' + subfield; }),

    forOtherUsers: _.map(
        // even with autopublish, no legitimate web app should be
        // publishing all users' emails
        _.without(Microsoft.whitelistedFields, 'email', 'verified_email'),
        function (subfield) { return 'services.microsoft.' + subfield; })
});