import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRouter from './routes/productRoutes.js'

const port = 5000;
const app = express();

mongoose.connect('mongodb+srv://dawnuptech:SW4pSVS5tF0Xp0Gn@cluster0.veawijj.mongodb.net/shop').then((val) => {
  app.listen(port, () => {
    console.log('server live');
  });
}).catch((err) => {
  console.log(err);
})

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).json({
    msg: 'Welcom to my Server'
  })
})

app.use('/products', productRouter);

app.use((req, res) => {
  return res.status(404).json({
    status: 'error',
    message: 'not found'
  })
})