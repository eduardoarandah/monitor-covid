const Twit = require('twit');

module.exports = function(msg, config) {
  const T = new Twit(config);
  T.post('statuses/update', { status: msg }, function(err, data, response) {
    // respuesta de twitter: 
    console.log(data);
  });
};
