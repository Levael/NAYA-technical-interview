const express        = require('express');
const bodyParser     = require('body-parser');
const configs        = require('./app/config.js');
const router         = require('./app/routes/routes.js');

// EXPRESS part ===================================

const app  = express();
const http_port = configs.http_port;
app.listen(http_port, () => {console.log('Server works on port: ' + http_port)});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', router);

// just for test
app.get('/', (req, res) => {
    res.send('OK');
});
