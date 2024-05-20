import express from 'express'
import mongoose from 'mongoose'
import productRoutes from './routes/productRoutes.js'

const port = 5000;
const app = express();

mongoose.connect('mongodb+srv://dawnuptech:SW4pSVS5tF0Xp0Gn@cluster0.veawijj.mongodb.net/shop').then((val) => {
  app.listen(port, () => {
    console.log('server is live');
  });
}).catch((err) => {
  console.log(err);
})

app.use(express.json());


app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome to my Server yoho'
  })
})

app.use('/products', productRoutes)


app.use((req, res) => {
  return res.status(404).json({
    status: 'error',
    message: 'not found'
  })
})