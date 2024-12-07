import express from 'express';
import categoriesrouter from './categories/categories.route';
import subcategoriesrouter from './subcategories/subcategories.route';

declare module 'express' {
    interface Request {
        filterData?: any;
    }
}

const mountRoutes = (app:express.Application)=> {
    app.use('/api/v1/categories',categoriesrouter);
    app.use('/api/v1/subcategories',subcategoriesrouter);
}

export default mountRoutes;