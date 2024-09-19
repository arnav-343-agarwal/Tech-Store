import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import productRoutes from './routes/product.route.js'

const app = express();
dotenv.config();

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/reactProducts');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

app.listen(5000,()=>{
    console.log("SERVER STARTED AT LOCALHOST 5000")
})

app.use('/api/products',productRoutes)


