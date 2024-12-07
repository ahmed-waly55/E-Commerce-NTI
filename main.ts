import express from 'express'
import dbConnection from './src/config/database';
import categoriesService from './src/categories/Categories.service';
import categoriesrouter from './src/categories/categories.route';
import dotenv from 'dotenv'
import subcategoriesrouter from './src/subcategories/subcategories.route';
import  mountRoutes from "./src/";


const app:express.Application = express();
app.use(express.json({limit:'5kb'}));
dbConnection();
dotenv.config();
mountRoutes(app);
  
  app.listen(process.env.PORT,()=>{
    console.log(`Server Started on port ${process.env.PORT}`)
  })


  