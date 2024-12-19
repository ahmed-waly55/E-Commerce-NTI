import { body, param } from "express-validator";
import usersSchema from "./users.schema";
import validatorMiddleware from "../middlewares/validator.middleware";

class UsersValidation{
    createOne = [body('username')
        .notEmpty()
        .withMessage((val,{req})=>{req._('validation_field')})
        .isLength({min:2,max:50})
        .withMessage((val,{req})=>{req._('validation_value')})
        .custom(async(val:string,{req})=>{
        const user = await usersSchema.findOne({username:val});
        if(user)throw new Error(`${req._('validation_email_check')}`);
        return true;
    }),
    body('email')
        .notEmpty()
        .withMessage((val,{req})=>{req._('validation_field')})
        .isEmail()
        .withMessage((val,{req})=>{req._('validation_value')})
        .custom(async(val:string,{req})=>{
        const user = await usersSchema.findOne({email:val});
        if(user)throw new Error(`${req._('validation_email_check')}`);
        return true;
    }),
    body('name')
    .notEmpty()
    .withMessage((val,{req})=>{req._('validation_field')})
    .isLength({min:5,max: 50})
    .withMessage((val,{req})=>{req._('validation_length_short')}),
    body('password')
    .notEmpty()
    .withMessage((val,{req})=>{req._('validation_field')})
    .isLength({min:6,max: 36})
    .withMessage((val,{req})=>{req._('validation_length_short')}),
    body('confirmPassword')
    .notEmpty()
    .withMessage((val,{req})=>{req._('validation_field')})
    .isLength({min:6,max: 36})
    .withMessage((val,{req})=>{req._('validation_length_short')})
    .custom((val: string, {req}) => {
        if (val !== req.body.password) throw new Error(`${req.__('validation_password_match')}`);
        return true;
    }),
    validatorMiddleware]

    updateOne = [
        param('id').isMongoId().withMessage('invalid id'),
        body('name')
        .optional()
        .isLength({min:5,max: 50})
        .withMessage((val,{req})=>{req._('validation_length_short')}),
        validatorMiddleware]

    getOne = [
        param('id').isMongoId().withMessage('invalid id'),
        validatorMiddleware]

    deleteOne = [
        param('id').isMongoId().withMessage('invalid id'),
        validatorMiddleware]

}

const usersValidation = new UsersValidation();

export default usersValidation;