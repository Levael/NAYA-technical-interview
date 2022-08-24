const db_api      = require('../database/db_api.js');
const request_api = require('../controllers/request_api.js');

class UsersService {
    async getUsers (callback) {
        db_api.getTable();
        // callback sends data to controller to response to client
        request_api.getUsers((info) => {
            callback(info);
        });
    }

    async addUser (body, callback) {
        // only if user didn't send data
        let test_user_data = {
            "first_name": "morpheus",
            "last_name" : "bring",
            "email"     : "aaa@gmail.com",
            "address"   : "Raanana"
        };

        request_api.addUser(body = test_user_data, (data) => {
            db_api.addUser(body = test_user_data, (has_error) => {
                // console.log(has_error);
                if (!has_error) callback(data);
            });
        });

    }

    async updateUser (id, body) {
        // only if user didn't send data
        let test_user_upd_data = {
            "first_name": "andrew",
            "last_name" : "gang",
            "email"     : "bbb@gmail.com",
            "address"   : "Tel-Aviv"
        };

        request_api.updateUser(id, body = test_user_upd_data, (data) => {
            db_api.updateUser(id, data, (has_error) => {
                if (!has_error) return data;
            });
        });

    }

    async deleteUser (id) {
        request_api.deleteUser(id, (data) => {
            if (!data) {console.log('err in delete'); return false};

            db_api.deleteUser(id, (has_error) => {
                if (!has_error) return data;
            });
        });
    }
}

module.exports = new UsersService();
