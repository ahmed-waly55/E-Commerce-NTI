import {Router} from 'express'
import usersService from './users.service';
import { body } from 'express-validator';
import usersSchema from './users.schema';
import usersValidation from './users.validation';

const usersrouter:Router = Router();




usersrouter.route('/')
    .get(usersService.getAll)
    .post(usersService.uploadImage,usersService.saveImage,usersValidation.createOne,usersService.createOne)


usersrouter.route('/:id')
    .get(usersValidation.getOne,usersService.getOne)
    .delete(usersValidation.deleteOne,usersService.deleteOne)
    .put(usersService.uploadImage,usersService.saveImage,usersValidation.updateOne,usersService.updateOne)


    usersrouter.put('/:id/change-password', usersValidation.changePassword, usersService.changePassword)


    export default usersrouter;