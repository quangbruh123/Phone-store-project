const express = require('express');
const router = express.Router();
const {
  getAllUser,
  getCurrentUser,
  getOneUser,
  updateUser,
  deleteUser,
  updateUserByAdmin,
  updateCart,
  removeProductInCart,
} = require('../controllers/user');
const {
  checkIsStaffOrAdmin,
  verifyAccessToken,
  checkIsUser,
} = require('../middlewares/verifyToken');

router.route('/').get(getAllUser);
router
  .route('/current')
  .get(verifyAccessToken, getCurrentUser)
  .put(verifyAccessToken, updateCart)
  .delete(verifyAccessToken, removeProductInCart); //verifyToken
router
  .route('/:uid')
  .get(verifyAccessToken, getOneUser)
  .put(verifyAccessToken, updateUser)
  .delete(verifyAccessToken, checkIsStaffOrAdmin, deleteUser);
router
  .route('/admin/:uid')
  .put(verifyAccessToken, checkIsStaffOrAdmin, updateUserByAdmin);
module.exports = router;
