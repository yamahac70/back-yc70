import fs from 'fs';
export default function convertidorJson(archivo) {
const texto = fs.readFileSync(archivo, 'utf-8');
const regex = /#EXTINF:-1 tvg-logo="([^"]*)" tvg-group="([^"]*)", ([^\n]*)\n([^#]*)/g;
const resultados = [];
let match;
while ((match = regex.exec(texto)) !== null) {
  const tvg_logo = match[1];
  const tvg_group = match[2];
  const titulo = match[3];
  const url = match[4].trim();
  const objetoJson = {
    tvg_logo,
    tvg_group,
    titulo,
    url,
  };
  resultados.push(objetoJson);
}
const jsonFinal = JSON.stringify(resultados, null, 2);
console.log(jsonFinal);
}