function (user, context, callback) {
  if (context.request.geoip) {
    context.idToken[https://example.com/country] = context.request.geoip.country_name;
    context.idToken[https://example.com/timezone] = context.request.geoip.time_zone;
    context.idToken[https://example.com/country_code] = context.request.geoip.country_code; 
 }

   // Example geoip object:
   // "geoip": {
   //    "country_code": "AR",
   //    "country_code3": "ARG",
   //    "country_name": "Argentina",
   //    "region": "05",
   //    "city": "Cordoba",
   //    "latitude": -31.41349983215332,
   //    "longitude": -64.18109893798828,
   //    "continent_code": "SA",
   //    "time_zone": "America/Argentina/Cordoba"
   //  }

  callback(null, user, context);
}
