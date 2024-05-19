import Product from '../models/Product.js'


export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(404).json({ status: 'error', message: 'No products found' });
    }
    return res.status(200).json({ status: 'success', data: products });
    // return res.status(200).json({
    //   status: 'success',
    //   data: products
    // });
  } catch (err) {
    return res.status(404).json({
      status: 'error',
      message: `${err}`
    });
  }
};