import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  rating: [
    {
      rate: { type: Number, required: true },
      count: { type: Number, required: true }
    }
  ],
  category: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
