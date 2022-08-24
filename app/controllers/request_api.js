const request = require('request');
const configs = require('../config.js');

const api_url = configs.api_url;

class RequestApi {
    async getUsers (callback) {
        request({
            method: 'GET',
            url: api_url + '/users?page=2',
            headers: {'User-Agent': 'request', 'Content-type': 'json'}
        }, (err, response, body) => {
            if (err) {
                console.log(err);
                return 'error in get data from api';
            }
            callback(body);
        });
    }

    async addUser (user_data, callback) {
        request({
            method: 'POST',
            url: api_url + '/users',
            headers: {'User-Agent': 'request', 'Content-type': 'json'},
            body: JSON.stringify(user_data)
        }, (err, response, body) => {
            if (err) {
                console.log(err);
                return 'error in get data from api';
            }
            callback(body);
        });
    }

    async updateUser (user_id, user_upd_data, callback) {
        request({
            method: 'PUT',
            url: api_url + '/users/' + user_id,
            headers: {'User-Agent': 'request', 'Content-type': 'json'},
            body: JSON.stringify(user_upd_data)
        }, (err, response, body) => {
            if (err) {
                console.log(err);
                return 'error in get data from api';
            }
            callback(body);
        });
    }

    async deleteUser (user_id, callback) {
        request({
            method: 'DELETE',
            url: api_url + '/users/' + user_id,
            headers: {'User-Agent': 'request', 'Content-type': 'json'}
        }, (err, response, body) => {
            if (err) {
                console.log(err);
                return 'error in get data from api';
            }

            if (response.statusCode == 204) callback(body);
        });
    }
}

module.exports = new RequestApi();
