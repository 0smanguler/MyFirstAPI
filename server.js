const http = require('http');
const app = require('./app')

const port = 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log('API RUNNING ON 3000')
});
