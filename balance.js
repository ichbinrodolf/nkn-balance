const express = require('express');
const nkn = require('nkn-sdk');
const fs = require('fs');
const hostname = '0.0.0.0';
const port = 8080;
const walletPwdFile = '/config/wallet_passwd.txt';
const walletJsonFile = '/config/wallet.json';
var wallet = nkn.Wallet.fromJSON(JSON.parse(fs.readFileSync(walletJsonFile)), { password: fs.readFileSync(walletPwdFile, 'utf8') } );

const server = express();
server.get('/', (req, res) => {
    wallet.getBalance().then((value) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.send(value.toString());
    });
});

server.listen(port, hostname)
