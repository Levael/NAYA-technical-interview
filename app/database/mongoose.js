const mongoose = require('mongoose');
const configs = require('../config.js');

const db_url = configs.db_url;

mongoose.connect(db_url, {
    useNewUrlParser: true, useUnifiedTopology: true
});

const db_schema = new mongoose.Schema({
    id          : {type: Number, required: true},
    email       : {type: String, required: true},
    first_name  : {type: String, required: true},
    last_name   : {type: String, required: true},
    address     : {type: String, required: true},
});

module.exports = mongoose.model('local_db', db_schema);
