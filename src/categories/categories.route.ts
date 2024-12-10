import {Router} from 'express'
import categoriesService from './Categories.service';
import subcategoriesrouter from '../subcategories/subcategories.route';
import { body } from 'express-validator';
import validatorMiddleware from '../middlewares/validator.middleware';
import categoriesSchema from './categories.schema';
import categoriesValidation from './categories.validation';

const categoriesrouter:Router = Router();


categoriesrouter.use('/:categoryId/subcategories',subcategoriesrouter);


categoriesrouter.route('/')
    .get(categoriesService.getAll)
    .post(categoriesValidation.createOne,categoriesService.createOne)


categoriesrouter.route('/:id')
    .get(categoriesValidation.getOne,categoriesService.getOne)
    .delete(categoriesValidation.deleteOne,categoriesService.deleteOne)
    .put(categoriesValidation.updateOne,categoriesService.updateOne)


export default categoriesrouter;