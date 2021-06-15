const Router = require('express');
const router = new Router();

const users_controller = require('../controllers/users.js');

router.get('/list', users_controller.getUsersList);
router.post('/add', users_controller.addUser);              // in body : user_data
router.put('/update/:id', users_controller.updateUser);     // in body : user_upd_data
router.delete('/delete/:id', users_controller.deleteUser);

module.exports = router;
