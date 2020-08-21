const dotenv = require('dotenv');

module.exports = {
  load: (name) => {

    //cargar archivo .env correspondiente
    dotenv.config({ path: `./.env.${name}` });

    return {
      municipio: process.env.MUNICIPIO,
      mensaje: process.env.MENSAJE,
      twitter: {
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token: process.env.TWITTER_ACCESS_TOKEN,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
      },
      telegram: {
        bot: process.env.TELEGRAM_BOT,
        key: process.env.TELEGRAM_KEY,
        chat: process.env.TELEGRAM_CHAT,
      },
    };
  },
};
