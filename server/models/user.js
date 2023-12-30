const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    match: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    validate: {
      validator: function (value) {
        return value && value.length === 10;
      },
      message: 'Số điện thoại phải có 10 chữ số',
    },
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
  passwordResetToken: {
    type: String,
  },
  resetTokenExpried: {
    type: Date,
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin'],
  },
  cart: [
    {
      product: { type: mongoose.Types.ObjectId, ref: 'Product' },
      quantity: Number,
    },
  ],
  wishlist: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.validatePassword = async function (password) {
  const res = await bcrypt.compareSync(password, this.password);
  console.log(res);
  return res;
};

userSchema.methods.createJWT = function (lifetime) {
  return jwt.sign({ _id: this._id, role: this.role }, process.env.SECRET_KEY, {
    expiresIn: lifetime,
  });
};

userSchema.methods.createPasswordResetToken = async function () {
  const randomKey = Math.floor(100000 + Math.random() * 900000);
  this.passwordResetToken = randomKey.toString();
  this.passwordResetExpired = Date.now() + 30 * 60 * 1000;
  await this.save();
  return randomKey;
};

//Export the model
module.exports = mongoose.model('User', userSchema);
