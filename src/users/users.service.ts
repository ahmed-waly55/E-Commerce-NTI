import {Request,Response,NextFunction} from 'express';
import {Users} from './users.interface';
import asyncHandler from 'express-async-handler'
import { create } from 'whatwg-url/lib/URLSearchParams';
import refactorService from '../refactor.service';
import usersSchema from './users.schema';
class UsersService{
   getAll = refactorService.getAll<Users>(usersSchema);

 createOne =refactorService.createOne<Users>(usersSchema);

 getOne = refactorService.getOne<Users>(usersSchema);
 updateOne = refactorService.updateOne<Users>(usersSchema);
 deleteOne = refactorService.deleteOne<Users>(usersSchema);

}

const usersService = new UsersService();


export default usersService;