import { body, param } from "express-validator";
import categoriesSchema from "./subcategories.schema";
import validatorMiddleware from "../middlewares/validator.middleware";

class subCategoriesValidation{
    createOne = [body('name')
        .notEmpty()
        .withMessage('subcategory name is required')
        .isLength({min:2,max:50})
        .withMessage('invaled length'),
        body('category').notEmpty().withMessage('category  is required')
        .isMongoId().withMessage('invalid id')
        .custom(async(val:string)=>{
            const category = await categoriesSchema.findById(val);
            if(!category) throw new Error('category not found');
            return true;
        }),
        validatorMiddleware]

    updateOne = [
        param('id').isMongoId().withMessage('invalid id'),
        body('name')
        .optional()
        .isLength({min:2,max:50})
        .withMessage('invaled length'),
        body('category').optional()
        .isMongoId().withMessage('invalid id')
        .custom(async(val:string)=>{
            const category = await categoriesSchema.findById(val);
            if(!category) throw new Error('category not found');
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