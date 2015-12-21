Package.describe({
  name: 'q42:accounts-microsoft',
  version: '1.0.0',
  summary: 'A login service for Microsoft accounts.',
  git: 'https://github.com/Q42/meteor-accounts-microsoft',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('underscore');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('q42:microsoft@0.1.0', ['client', 'server']);

  api.addFiles(['client/login.js', 'client/login_button.css'], 'client');
  api.addFiles('lib/register.js');
  api.addFiles('server/autopublish.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ecmascript');
  api.use('q42:accounts-microsoft');

  // Tests will follow soon!
  api.addFiles([]);
});
