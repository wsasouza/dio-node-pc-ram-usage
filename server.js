const http = require('http');
const stats = require('./pcRamUsage.js');

const host = 'http://localhost';
const port = 3000;

http.createServer((req, res) => {
  let url = req.url;

  if(url === '/stats') {
    res.end(JSON.stringify(stats, null, 2));
  } else {
    res.end('<h1>Working in route /stats</h1>')
  }
}).listen(3000, () => console.log(`Server is running in ${host}:${port}`));