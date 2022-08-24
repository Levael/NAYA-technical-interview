const bodyParser   = require('body-parser');
const usersService = require('../services/users.js');


class UsersController {
    async getUsersList (req, res) {
        usersService.getUsers((data) => {
            res.json(data);
        });
    }

    async addUser (req, res) {
        usersService.addUser(req.body.user_data, (data) => {
            res.json(data);
        });
    }

    async updateUser (req, res) {
        usersService.updateUser(req.params.id, req.body.user_upd_data, (data) => {
            res.json(data);
        });
    }

    async deleteUser (req, res) {
        usersService.deleteUser(req.params.id, (data) => {
            res.status(204).json(data);
        });

    }
}

module.exports = new UsersController();
