Meteor.loginWithMicrosoft = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
        callback = options;
        options = null;
    }

/*
     This is the google variety, fix it to work with Microsoft authentication!
*/

    // Use Google's domain-specific login page if we want to restrict creation to
    // a particular email domain. (Don't use it if restrictCreationByEmailDomain
    // is a function.) Note that all this does is change Google's UI ---
    // accounts-base/accounts_server.js still checks server-side that the server
    // has the proper email address after the OAuth conversation.
    //if (typeof Accounts._options.restrictCreationByEmailDomain === 'string') {
    //    options = _.extend({}, options || {});
    //    options.loginUrlParameters = _.extend({}, options.loginUrlParameters || {});
    //    options.loginUrlParameters.hd = Accounts._options.restrictCreationByEmailDomain;
    //}
    //var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    //Google.requestCredential(options, credentialRequestCompleteCallback);
};