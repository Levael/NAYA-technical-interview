const bodyParser  = require('body-parser');

const db_api      = require('../database/db_api.js');
const request_api = require('./request_api.js');

class UsersController {
    async getUsersList (req, res) {
        let data = await request_api.getUsers();

        console.log(db_api.getTable());

        // let error = await db_api.setUsers(data);
        // if (!error) res.json(data);
        res.json(data);
    }

    async addUser (req, res) {
        // only if user didn't send data
        let test_user_data = {
            "first_name": "morpheus",
            "last_name" : "bring",
            "email"     : "aaa@gmail.com",
            "address"   : "Raanana"
        };

        let data = await request_api.addUser(req.body.user_data = test_user_data);
        let error = await db_api.addUser(data);
        if (!error) res.json(data);
    }

    async updateUser (req, res) {
        // only if user didn't send data
        let test_user_upd_data = {
            "first_name": "andrew",
            "last_name" : "gang",
            "email"     : "bbb@gmail.com",
            "address"   : "Tel-Aviv"
        };

        let data = await request_api.updateUser(req.params.id, req.body.user_upd_data = test_user_upd_data);
        let error = await db_api.updateUser(req.params.id, data);
        if (!error) res.json(data);
    }

    async deleteUser (req, res) {
        let data = await request_api.deleteUser(req.params.id);
        if (!data) {console.log('err in delete'); return false};
        let error = await db_api.deleteUser(req.params.id);
        // if (!error) res.status(204).json(data);
        if (!error) res.json(data);
    }
}

module.exports = new UsersController();
