import Product from '../models/Product.js'


export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      status: 'success',
      data: products
    })
  } catch (err) {
    return res.status(404).json({
      status: 'error',
      message: `${err}`
    });
  }
};