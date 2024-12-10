import {Request,Response,NextFunction} from 'express';
import asyncHandler from 'express-async-handler'
import subcategoriesSchema from './products.schema';
import { Products } from './products.interface';
import refactorService from '../refactor.service';
import productsSchema from './products.schema';

class ProductsService{


getAll = refactorService.getAll<Products>(productsSchema);

createOne =refactorService.createOne<Products>(productsSchema);

getOne = refactorService.getOne<Products>(productsSchema);
updateOne = refactorService.updateOne<Products>(productsSchema);
deleteOne = refactorService.deleteOne<Products>(productsSchema);

}

const productsService = new ProductsService();


export default productsService;