import {Request,Response,NextFunction} from 'express';
import asyncHandler from 'express-async-handler'
import subcategoriesSchema from './products.schema';
import { Products } from './products.interface';
import refactorService from '../refactor.service';
import productsSchema from './products.schema';
import sharp from 'sharp';
import { uploadSingleFile } from '../middlewares/uploadFiles.middleware';

class ProductsService{


getAll = refactorService.getAll<Products>(productsSchema, 'products');

createOne =refactorService.createOne<Products>(productsSchema);

getOne = refactorService.getOne<Products>(productsSchema);
updateOne = refactorService.updateOne<Products>(productsSchema);
deleteOne = refactorService.deleteOne<Products>(productsSchema);

uploadImages = uploadSingleFile(['image'],'cover');

 saveImage = async (req:Request, res:Response, next:NextFunction) => {
    if (req.file) {
      const fileName:string = `products-${Date.now()}-cover.webp`;
      await sharp(req.file.buffer)
      .webp({quality:95})
      .resize(1200,1200)
      .toFile(`uploads/images/products-${fileName}}`);
      req.body.cover = fileName;

    }
    next();
}



}

const productsService = new ProductsService();


export default productsService;