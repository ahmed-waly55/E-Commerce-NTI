import { body, param } from "express-validator";
import categoriesSchema from "./categories.schema";
import validatorMiddleware from "../middlewares/validator.middleware";

class CategoriesValidation{
    createOne = [body('name')
        .notEmpty()
        .withMessage('category name is required')
        .isLength({min:2,max:50})
        .withMessage('invaled length')
        .custom(async(val:string)=>{
        const category = await categoriesSchema.findOne({name:val});
        if(category)throw new Error('category is already in use');
        return true;
    }),validatorMiddleware]

    updateOne = [
        param('id').isMongoId().withMessage('invalid id'),
        body('name')
        .optional()
        .isLength({min:2,max:50})
        .withMessage('invaled length')
        .custom(async(val:string,{req})=>{
        const category = await categoriesSchema.findOne({name:val});
        if(category && category._id!.toString() !== req.params?.id.toString())throw new Error('category is already in use');
        return true;
    }),validatorMiddleware]

    getOne = [
        param('id').isMongoId().withMessage('invalid id'),
        validatorMiddleware]

    deleteOne = [
        param('id').isMongoId().withMessage('invalid id'),
        validatorMiddleware]

}

const categoriesValidation = new CategoriesValidation();

export default categoriesValidation;