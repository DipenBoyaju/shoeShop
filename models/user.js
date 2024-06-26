import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    min: [5, 'Min character 5'],
    required: [true, 'password is required']
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  shippingAddress: {
    address: { type: String, default: '' },
    city: { type: String, default: '' },
    isEmpty: { type: String, default: false }
  }
}, { timestamps: true })

const User = mongoose.model('User', userSchema);

export default User;