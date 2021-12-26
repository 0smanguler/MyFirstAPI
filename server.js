const http = require('http'); //npm paketini
const app= require('./app')

const port = 3000;

const server = http.createServer(app);

server.listen(port);

// Veya = ||
// Ve = &&

//require dışarıdan bir paketin veya js dosyasını içeriye aktarmak için kullanılır
