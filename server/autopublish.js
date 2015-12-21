/**
   If autopublish is on, publish these user fields. Login service
   packages (eg accounts-google). Notably, this isn't implemented with
   multiple publishes since DDP only merges only across top-level
   fields, not subfields (such as 'services.microsoft.accessToken')
*/
Accounts.addAutopublishFields({

    forLoggedInUser: _.map(
        // publish access token since it can be used from the client
        Microsoft.whitelistedFields.concat(['accessToken', 'expiresAt']), // don't publish refresh token
        function (subfield) { return 'services.microsoft.' + subfield; }),

    forOtherUsers: _.map(
        // even with autopublish, no legitimate web app should be
        // publishing all users' emails
        _.without(Microsoft.whitelistedFields, 'emails'),
        function (subfield) { return 'services.microsoft.' + subfield; })
});