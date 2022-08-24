const db = require('./mongodb.js');

class DB {
    async getTable () {
        await db.find((err, data) => {
            if (err) console.log(err);
            console.log(data);
        });
    }
    // setUsers (users) {
    //     database.insertMany(users, (err, result) => {
    //         if (err) {
    //           return 'error in add';
    //         } else {
    //             callback();
    //         }
    //     });
    // }

    async addUser (user, callback) {
        await db.create(user, (err, result) => {
            callback(err ? false : true);
        });
    }

    async updateUser (user_id, user_upd_data, callback) {
        await db.findOneAndUpdate({id: user_id}, user_upd_data, (err, result) => {  // {new: true} to return updated value
            callback(err ? false : true);
        });
    }

    async deleteUser (user_id, callback) {
        await db.findOneAndDelete({id: user_id}, (err, result) => {
            callback(err ? false : true);
        });
    }
}

module.exports = new DB();
