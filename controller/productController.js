import mongoose from "mongoose";
import Product from "../models/Product.js"

export const getAllProduct = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // let sortOption = {};
    // if (sort === 'priceHighToLow') {
    //   sortOption = { price: -1 };
    // } else if (sort === 'priceLowToHigh') {
    //   sortOption = { price: 1 }
    // }

    const product = await Product.find().skip(skip).limit(parseInt(limit)).exec();
    const count = await Product.countDocuments();

    return res.status(200).json({
      status: 'success',
      data: product,
      count,
      limit: parseInt(limit),
      totalPages: Math.ceil(count / parseInt(limit)),
      currentPage: parseInt(page)
    })
  } catch (err) {
    return res.status(404).json({
      status: 'error',
      message: `${err}`
    })
  }
};


export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    if (mongoose.isValidObjectId(id)) {
      const data = await Product.findById(id);
      if (!data) return res.status(404).json({ message: 'data not found' });
      return res.status(200).json({
        status: 'success',
        data: data
      });
    } else {
      return res.status(400).json({
        status: 'error',
        message: 'please provide valid id'
      })
    }

  } catch (error) {
    return req.status(400).json({
      status: 'error',
      message: `${error}`
    })
  }
}


export const addProduct = async (req, res) => {
  const {
    id,
    name,
    price,
    image,
    description,
    quantity,
    rating,
    category,
  } = req.body;

  try {
    const data = await Product.create({
      id,
      name,
      price,
      image,
      description,
      quantity,
      rating,
      category,
    })
    return res.status(200).json({
      status: 'success',
      messgae: 'product added successfully'
    })

  } catch (error) {
    return res.status(400).json({
      status: 'error',
      message: `${error}`
    })
  }
}


export const removeProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const exist = await Product.findById(id);
    if (!exist) return res.status(404).json({ message: 'Product not found' });
    await exist.deleteOne();

    return res.status(200).json({
      status: "success",
      message: "Product removed Successfully"
    })

  } catch (error) {
    return res.status(400).json({
      status: 'error',
      message: `${error}`
    })
  }
}