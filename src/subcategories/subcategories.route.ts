import {Router} from 'express'
import subcategoriesService from './subcategories.service';
import subcategoriesValidation from './subcategories.validation';

const subcategoriesrouter:Router = Router({mergeParams: true});

subcategoriesrouter.route('/')
    .get(subcategoriesService.filterSubcategories,subcategoriesService.getAll)
    .post(subcategoriesService.setCategoryId,subcategoriesValidation.createOne,subcategoriesService.createOne)


subcategoriesrouter.route('/:id')
    .get(subcategoriesValidation.getOne,subcategoriesService.getOne)
    .delete(subcategoriesValidation.deleteOne,subcategoriesService.deleteOne)
    .put(subcategoriesValidation.updateOne,subcategoriesService.updateOne)


export default subcategoriesrouter;