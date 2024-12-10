import {Router} from 'express'
import productsService from './products.service';
import productsValidation from './products.validation';

const productsrouter:Router = Router();

productsrouter.route('/')
    .get(productsService.getAll)
    .post(productsValidation.createOne,productsService.createOne)


productsrouter.route('/:id')
    .get(productsValidation.getOne,productsService.getOne)
    .delete(productsValidation.deleteOne,productsService.deleteOne)
    .put(productsValidation.updateOne,productsService.updateOne)


export default productsrouter;