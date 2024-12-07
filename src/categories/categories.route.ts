import {Router} from 'express'
import categoriesService from './Categories.service';
import subcategoriesrouter from '../subcategories/subcategories.route';

const categoriesrouter:Router = Router();


categoriesrouter.use('/:categoryId/subcategories',subcategoriesrouter);


categoriesrouter.route('/')
    .get(categoriesService.getAll)
    .post(categoriesService.createOne)


categoriesrouter.route('/:id')
    .get(categoriesService.getOne)
    .delete(categoriesService.deleteOne)
    .put(categoriesService.updateOne)


export default categoriesrouter;