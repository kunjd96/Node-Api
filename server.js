const http = require('http');
const express = require('express');
const dotenv = require('dotenv');

//Load Env

dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('App listening on port : ' + process.env.NODE_ENV + ' Port : ' + process.env.PORT);
});

// const server = http.createServer((req, res) => {

//     res.writeHead(404, {
//         'Content-Type': 'application/json',
//         'X-Powered-By': 'Node.js'

//     })
//     res.end(JSON.stringify({
//         success: false,
//         Data: data
//     }));
// });

// const port = 5000;

// server.listen(port, () => {
//     console.log('App listening on port !' + port);
// });