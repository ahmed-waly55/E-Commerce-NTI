import express from 'express'
import dbConnection from './src/config/database';
import categoriesService from './src/categories/Categories.service';
import categoriesrouter from './src/categories/categories.route';
import dotenv from 'dotenv'
import subcategoriesrouter from './src/subcategories/subcategories.route';

const app:express.Application = express();
app.use(express.json({limit:'5kb'}));
dbConnection();
dotenv.config();
app.use('/api/v1/categories',categoriesrouter)
app.use('/api/v1/subcategories',subcategoriesrouter)
  
  app.listen(process.env.PORT,()=>{
    console.log(`Server Started on port ${process.env.PORT}`)
  })
