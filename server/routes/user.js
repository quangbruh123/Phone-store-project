const express = require('express');
const router = express.Router();
const {
  getAllUser,
  getCurrentUser,
  getOneUser,
  updateUser,
  deleteUser,
} = require('../controllers/user');
const { verifyToken } = require('../middlewares/verifyToken');

router.route('/').get(getAllUser);
router.route('/current').get(getCurrentUser); //verifyToken
router.route('/:uid').get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = router;
