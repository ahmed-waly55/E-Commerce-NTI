import {Router , Request , Response , NextFunction} from 'express'
import productsService from './products.service';
import productsValidation from './products.validation';
import multer from 'multer';
import sharp from 'sharp';



const productsrouter:Router = Router();

productsrouter.route('/')
    .get(productsService.getAll)
    .post(productsService.uploadImages,productsService.saveImage,productsValidation.createOne,productsService.createOne)


productsrouter.route('/:id')
    .get(productsValidation.getOne,productsService.getOne)
    .delete(productsValidation.deleteOne,productsService.deleteOne)
    .put(productsService.uploadImages,productsService.saveImage,productsValidation.updateOne,productsService.updateOne)


export default productsrouter;