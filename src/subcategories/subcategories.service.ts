import {Request,Response,NextFunction} from 'express';
import asyncHandler from 'express-async-handler'
import subcategoriesSchema from './subcategories.schema';
import { Subcategories } from './subcategories.interface';

class SubcategoriesService{
   
getAll = asyncHandler(async (req:Request,res:Response,next:NextFunction)=>{
    const subcategories:Subcategories[] = await subcategoriesSchema.find();
    res.status(200).json({data: subcategories});

})


createOne = asyncHandler(async (req:Request,res:Response,next:NextFunction)=>{
    const subcategory:Subcategories = await subcategoriesSchema.create(req.body);
    res.status(200).json({data: subcategory});

})

getOne = asyncHandler(async (req:Request,res:Response,next:NextFunction)=>{
    const subcategory:Subcategories|null = await subcategoriesSchema.findById(req.params.id);
    res.status(200).json({data: subcategory});

})

updateOne = asyncHandler(async (req:Request,res:Response,next:NextFunction)=>{
    const subcategory:Subcategories|null = await subcategoriesSchema.findByIdAndUpdate(req.params.id);
    res.status(200).json({data: subcategory});

})

deleteOne = asyncHandler(async (req:Request,res:Response,next:NextFunction)=>{
    const subcategory:Subcategories|null = await subcategoriesSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({data: subcategory});

})


}

const subcategoriesService = new SubcategoriesService();


export default subcategoriesService;