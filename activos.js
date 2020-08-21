var fetch = require('node-fetch');

module.exports = async function(claveMunicipio) {
  let response = await fetch('https://coronavirus.gob.mx/datos/Overview/info/getInfo.php', {
    headers: {
      accept: '*/*',
      'accept-language': 'es,es-ES;q=0.9,en;q=0.8',
      'cache-control': 'no-cache',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryWUKVwTBDWw1CIYBb',
      pragma: 'no-cache',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
    },
    referrer: 'https://coronavirus.gob.mx/datos/',
    referrerPolicy: 'no-referrer-when-downgrade',
    body: `------WebKitFormBoundaryWUKVwTBDWw1CIYBb\r\nContent-Disposition: form-data; name="sPatType"\r\n\r\nConfirmados\r\n------WebKitFormBoundaryWUKVwTBDWw1CIYBb\r\nContent-Disposition: form-data; name="cve"\r\n\r\n${claveMunicipio}\r\n------WebKitFormBoundaryWUKVwTBDWw1CIYBb\r\nContent-Disposition: form-data; name="nom"\r\n\r\nMunicipio\r\n------WebKitFormBoundaryWUKVwTBDWw1CIYBb--\r\n`,
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  });
  let text = await response.text();
  let regexp = /"gsActDIV"\).innerHTML = \((\d+)\)/;
  let match = text.match(regexp);
  return match[1];
}
