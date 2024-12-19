import express from 'express';
import categoriesrouter from './categories/categories.route';
import subcategoriesrouter from './subcategories/subcategories.route';
import { error } from 'console';
import globalErrors from './middlewares/errors.midleware';
import ApiErrors from './utils/apiErrors';
import productsrouter from './products/products.route';
import usersrouter from './users/users.route';

declare module 'express' {
    interface Request {
        filterData?: any;
        files?: any;
    }
}


const mountRoutes = (app:express.Application)=> {

    app.use('/api/v1/categories',categoriesrouter);
    app.use('/api/v1/subcategories',subcategoriesrouter);
    app.use('/api/v1/products',productsrouter);
    app.use('/api/v1/users',usersrouter);
    app.all('*',(req: express.Request, res: express.Response, next: express.NextFunction)=>{
        next(new ApiErrors(`route ${req.originalUrl} not found`, 400));
    });
    app.use(globalErrors);


}

export default mountRoutes;