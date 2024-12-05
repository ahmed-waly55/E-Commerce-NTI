import {Router} from 'express'
import subcategoriesService from './subcategories.service';

const subcategoriesrouter:Router = Router();

subcategoriesrouter.route('/')
    .get(subcategoriesService.getAll)
    .post(subcategoriesService.createOne)


subcategoriesrouter.route('/:id')
    .get(subcategoriesService.getOne)
    .delete(subcategoriesService.deleteOne)
    .put(subcategoriesService.updateOne)


export default subcategoriesrouter;