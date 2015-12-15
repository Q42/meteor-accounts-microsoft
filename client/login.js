Meteor.loginWithMicrosoft = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
        callback = options;
        options = null;
    }

    if (typeof Accounts._options.restrictCreationByEmailDomain === 'string') {
        options = _.extend({}, options || {});
        options.loginUrlParameters = _.extend({}, options.loginUrlParameters || {});
        options.loginUrlParameters.hd = Accounts._options.restrictCreationByEmailDomain;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Microsoft.requestCredential(options, credentialRequestCompleteCallback);
};