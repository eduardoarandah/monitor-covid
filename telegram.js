const fetch = require('node-fetch');

module.exports = function(msg, config) {
  const { bot, key, chat } = config;
  const encodedMsg = encodeURIComponent(msg);
  const url = `https://api.telegram.org/bot${bot}:${key}/sendMessage?chat_id=${chat}&text=${encodedMsg}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
