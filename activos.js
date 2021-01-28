var fetch = require('node-fetch');

module.exports = async function(claveMunicipio) {
let response = await fetch("https://datos.covid-19.conacyt.mx/Overview/info/getInfo.php", {
  "headers": {
    "accept": "*/*",
    "accept-language": "es,es-ES;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundarykK8ZLzKA5YBwTJS8",
    "pragma": "no-cache",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.2.2115757546.1610502899; _gid=GA1.2.1651742995.1611796532; _gat_gtag_UA_162041023_1=1"
  },
  "referrer": "https://datos.covid-19.conacyt.mx/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `------WebKitFormBoundarykK8ZLzKA5YBwTJS8\r\nContent-Disposition: form-data; name=\"sPatType\"\r\n\r\nConfirmados\r\n------WebKitFormBoundarykK8ZLzKA5YBwTJS8\r\nContent-Disposition: form-data; name=\"cve\"\r\n\r\n${claveMunicipio}\r\n------WebKitFormBoundarykK8ZLzKA5YBwTJS8\r\nContent-Disposition: form-data; name=\"nom\"\r\n\r\nXalapa, Veracruz\r\n------WebKitFormBoundarykK8ZLzKA5YBwTJS8--\r\n`,
  "method": "POST",
  "mode": "cors"
});
  let text = await response.text();
  let regexp = /"gsActDIV"\).innerHTML = \((\d+)\)/;
  let match = text.match(regexp);
  return match[1];

}
