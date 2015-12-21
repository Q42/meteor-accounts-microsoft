/**
 * Meteor.loginWithMicrosoft(options, callback)
 *
 * This method is used on the client side to summon the Microsoft login page
 * just like you would with any other accounts package. It utilizes the
 * Accounts Base package.
 *
 * @param options
 * @param callback
 */
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