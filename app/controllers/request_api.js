const request = require('request');
const configs = require('../config.js');

const api_url = configs.api_url;

class RequestApi {
    getUsers () {
        return request({
            method: 'GET',
            url: api_url + '/users?page=2',
            headers: {'User-Agent': 'request', 'Content-type': 'json'}
        }, (err, response, body) => {
            if (err) {
                console.log(err);
                return 'error in get data from api';
            }


            return(body);
        });
    }

    addUser (user_data) {
        return request({
            method: 'POST',
            url: api_url + '/users',
            headers: {'User-Agent': 'request', 'Content-type': 'json'},
            body: JSON.stringify(user_data)
        }, (err, response, body) => {
            if (err) {
                console.log(err);
                return 'error in get data from api';
            }
            return(body);
        });
    }

    updateUser (user_id, user_upd_data) {
        return request({
            method: 'PUT',
            url: api_url + '/users/' + user_id,
            headers: {'User-Agent': 'request', 'Content-type': 'json'},
            body: JSON.stringify(user_upd_data)
        }, (err, response, body) => {
            if (err) {
                console.log(err);
                return 'error in get data from api';
            }
            return(body);
        });
    }

    deleteUser (user_id) {
        return request({
            method: 'DELETE',
            url: api_url + '/users/' + user_id,
            headers: {'User-Agent': 'request', 'Content-type': 'json'}
        }, (err, response, body) => {
            if (err) {
                console.log(err);
                return 'error in get data from api';
            }

            // console.log(response.statusCode);

            if (response.statusCode == 204) return(body);

            console.log('u shoudnt see that');
            return false;
        });
    }
}

module.exports = new RequestApi();
