const express = require('express');
const router = express.Router();
const {
  getAllPhone,
  getFilterProduct,
  getOnePhone,
  createPhone,
  updatePhone,
  deletePhone,
} = require('../controllers/phone');
const { verifyToken, checkingAdmin } = require('../middlewares/verifyToken');

// getAllPhone: verifyToken, checkingAdmin
router.route('/').get(getAllPhone).post(createPhone);

//getFilterProduct
router.route('/filter').get(getFilterProduct);

//getOnePhone: verifyToken
//updatePhone: verifyToken, checkingAdmin
//deletePhone: verifyToken, checkingAdmin
router.route('/:pid').get(getOnePhone).put(updatePhone).delete(deletePhone);

module.exports = router;
