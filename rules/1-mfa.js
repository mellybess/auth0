function (user, context, callback) {

  var CLIENTS_WITH_MFA = [configuration.node-client-id];
  // run only for the specified clients
   if (CLIENTS_WITH_MFA.indexOf(context.clientID) !== -1) {
    // uncomment the following if clause in case you want to request a second factor only from user's that have user_metadata.use_mfa === true
    // if (user.user_metadata && user.user_metadata.use_mfa){
      context.multifactor = {
        // required
        provider: 'guardian',

        // optional, defaults to true. Set to false to force Guardian authentication every time.
        // See https://auth0.com/docs/multifactor-authentication/custom#change-the-frequency-of-authentication-requests for details
        allowRememberBrowser: true
      };
    // }
  //}

  callback(null, user, context);
}
