const path = require('path'),
  configLoader = require(path.join(__dirname, 'configLoader.js')),
  activos = require(path.join(__dirname, 'activos.js')),
  telegram = require(path.join(__dirname, 'telegram.js')),
  twitter = require(path.join(__dirname, 'twitter.js'));

if (process.argv.length < 3) {
  console.log(
    'Faltan argumentos: : nombre, medios: twitter telegram, ejemplo: xalapa telegram twitter '
  );
  console.log('Debe existir .env.nombre_del_primer_param');
  return;
}

// Etiqueta de municipio (mayúsculas la primera) y clave
const alias = process.argv[2];

// Servicios
const servicios = process.argv.slice(3);
const includesTwitter = servicios.includes('twitter');
const includesTelegram = servicios.includes('telegram');
const includesTest = servicios.includes('test');

// Cargar config de .env.xxxxxxxx
const config = configLoader.load(alias);

activos(config.municipio).then((res) => {
  const mensaje = `${config.mensaje} ${res}`;
  console.log(mensaje);

  // test
  if (includesTest) {
    console.log(mensaje);
  }

  // twitter
  if (includesTwitter) {
    if (!config.twitter.consumer_key) {
      console.log(`No hay configuración twitter para ${alias}`);
      return;
    }
    console.log('Posteando en twitter...');
    twitter(mensaje, config.twitter);
  }

  // telegram
  if (includesTelegram) {
    if (!config.telegram.bot) {
      console.log(`No hay configuración telegram para ${alias}`);
      return;
    }
    console.log('Posteando en telegram...');
    telegram(mensaje, config.telegram);
  }

  console.log('listo!');
});
