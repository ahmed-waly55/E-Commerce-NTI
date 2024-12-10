import { body, param } from "express-validator";
import validatorMiddleware from "../middlewares/validator.middleware";
import categoriesSchema from "../categories/categories.schema";
import subcategoriesSchema from "../subcategories/subcategories.schema";


class subCategoriesValidation{
    createOne = [
        body('name')
        .notEmpty()
        .withMessage('product name is required')
        .isLength({min:2,max:50})
        .withMessage('invaled length'),
        body('description')
        .notEmpty()
        .withMessage('description is required')
        .isLength({min:2,max: 500})
        .withMessage('invaled length'),
        body('price')
        .notEmpty()
        .withMessage('description is required')
        .isFloat({min:1 ,max: 10000000000})
        .withMessage('invaled value'),
        body('quantity')
        .optional()
        .isInt({min:1 ,max: 10000000000})
        .withMessage('invaled value'),
        body('discount')
        .optional()
        .isFloat({min:1 ,max: 100})
        .withMessage('invaled value')
        .custom((val,{req})=>{
            req.body.priceAfterDiscount = req.body.price - (req.body.price * val / 100)
            return true;
        }),
        body('category').notEmpty().withMessage('category  is required')
        .isMongoId().withMessage('invalid id')
        .custom(async(val:string)=>{
            const category = await categoriesSchema.findById(val);
            if(!category) throw new Error('category not found');
            return true;
        }),
        body('subcategory').notEmpty().withMessage('subcategory  is required')
        .isMongoId().withMessage('invalid id')
        .custom(async(val:string , {req} ) => {
            const subcategory = await subcategoriesSchema.findById(val);
            if(!subcategory) throw new Error('category not found');
            if (subcategory.category._id!.toString() !== req.body.category.toString()) throw new Error(`Subcategory not belong to this Category`);
            return true;
        }),
        validatorMiddleware]

    updateOne = [
        param('id').isMongoId().withMessage('invalid id'),
        body('name')
        .optional()
        .isLength({min:2,max:50})
        .withMessage('invaled length'),
        body('description')
        .optional()
        .isLength({min:2,max: 500})
        .withMessage('invaled length'),
        body('price')
        .optional()
        .isFloat({min:1 ,max: 10000000000})
        .withMessage('invaled value'),
        body('quantity')
        .optional()
        .isInt({min:1 ,max: 10000000000})
        .withMessage('invaled value'),
        body('discount')
        .optional()
        .isFloat({min:1 ,max: 100})
        .withMessage('invaled value')
        .custom((val,{req})=>{
            req.body.priceAfterDiscount = req.body.price - (req.body.price * val / 100)
            return true;
        }),
        body('category').optional()
        .isMongoId().withMessage('invalid id')
        .custom(async(val:string)=>{
            const category = await categoriesSchema.findById(val);
            if(!category) throw new Error('category not found');
            return true;
        }),
        body('subcategory').optional()
        .isMongoId().withMessage('invalid id')
        .custom(async(val:string , {req} ) => {
            const subcategory = await subcategoriesSchema.findById(val);
            if(!subcategory) throw new Error('category not found');
            if (subcategory.category._id!.toString() !== req.body.category.toString()) throw new Error(`Subcategory not belong to this Category`);
            return true;
        }),
        validatorMiddleware]

    getOne = [
        param('id').isMongoId().withMessage('invalid id'),
        validatorMiddleware]

    deleteOne = [
        param('id').isMongoId().withMessage('invalid id'),
        validatorMiddleware]

}

const subcategoriesValidation = new subCategoriesValidation();

export default subcategoriesValidation;