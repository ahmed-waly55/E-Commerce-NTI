import { Server } from 'http';
import express from 'express'
import dbConnection from './src/config/database';
import categoriesService from './src/categories/Categories.service';
import categoriesrouter from './src/categories/categories.route';
import dotenv from 'dotenv'
import subcategoriesrouter from './src/subcategories/subcategories.route';
import  mountRoutes from "./src/";
import i18n from 'i18n';
import path from 'path';


const app:express.Application = express();
app.use(express.json({limit:'5kb'}));
let server:Server;
dbConnection();
dotenv.config();
i18n.configure({
  locales:['en','ar'],
  directory: path.join(__dirname,'locales'),
  defaultLocale: 'en',
  queryParameter: 'lang'
});
app.use(i18n.init);
mountRoutes(app);
  


  server = app.listen(process.env.PORT, () =>
    console.log(`Server listening on port ${process.env.PORT}`)
  );
  
  process.on("unhandledRejection", (err: Error) => {
    console.error(`Unhandled rejection ${err.name} | ${err.message}`);
    server.close(() => {
      console.log("Server is closing due to unhandled rejection");
      process.exit(1);
    });
  });