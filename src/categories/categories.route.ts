import {Router} from 'express'
import categoriesService from './Categories.service';

const categoriesrouter:Router = Router();

categoriesrouter.route('/')
    .get(categoriesService.getAll)
    .post(categoriesService.createOne)


categoriesrouter.route('/:id')
    .get(categoriesService.getOne)
    .delete(categoriesService.deleteOne)
    .put(categoriesService.updateOne)


export default categoriesrouter;