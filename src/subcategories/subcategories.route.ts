import {Router} from 'express'
import subcategoriesService from './subcategories.service';

const subcategoriesrouter:Router = Router({mergeParams: true});

subcategoriesrouter.route('/')
    .get(subcategoriesService.filterSubcategories,subcategoriesService.getAll)
    .post(subcategoriesService.setCategoryId,subcategoriesService.createOne)


subcategoriesrouter.route('/:id')
    .get(subcategoriesService.getOne)
    .delete(subcategoriesService.deleteOne)
    .put(subcategoriesService.updateOne)


export default subcategoriesrouter;