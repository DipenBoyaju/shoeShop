import mongoose from "mongoose";
import Product from "../models/Product.js"

export const getAllProduct = async (req, res) => {
  try {
    const product = await Product.find()
    return res.status(200).json({
      status: 'success',
      data: product
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