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
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  availableColors: {
    type: [String],
    required: true,
  },
  availableSizes: {
    type: [Number],
    required: true,
  },
  catFor: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  sliderImages: {
    type: [String],
    required: true,
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
