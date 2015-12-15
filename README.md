# Accounts Microsoft meteor package
__A login service for Microsoft accounts__

[![Build Status][travis-image]][travis-url]

## Getting started

Add the package to meteor
```
meteor add q42:accounts-microsoft
```

## Basic usage

The usage is pretty much the same as all other account packages for meteor. It's inspired by the official Accounts Google meteor package.
It goes a little bit something like this:
```
Meteor.loginWithMicrosoft({
    requestOfflineToken: true,
    // Permission scopes are found here: https://msdn.microsoft.com/en-us/library/hh243648.aspx
    requestPermissions: ['wl.basic']
}, function(error) {
    if (error) {
        console.error('Login failed:', error.reason || error);
    }
    else {
        console.log('Logged in!');
    }
});
```

## References

### OAuth package

* [q42:microsoft](https://github.com/Q42/meteor-microsoft)

### Microsoft REST documentation

* [REST Reference](https://msdn.microsoft.com/en-us/library/hh243648.aspx)
* [Signing users in](https://msdn.microsoft.com/en-us/library/office/dn659750.aspx)
* [Getting user data](https://msdn.microsoft.com/en-us/library/office/dn659736.aspx)


[travis-url]: https://travis-ci.org/Q42/meteor-accounts-microsoft
[travis-image]: http://img.shields.io/travis/Q42/meteor-accounts-microsoft.svg
