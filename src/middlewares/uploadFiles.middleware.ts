import multer from "multer";
import {Request} from "express";
import ApiErrors from "../utils/apiErrors";

interface Fields {
    name: string;
    maxCount: number;
}

// disk storge code 
// const storge = multer.diskStorage({destination:(req,file,cd) => {
//     cd(null,'uploads/images/products');
// },
// filename:(req,file,cd)=>{
//     const ext = file.mimetype.split('/')[1];
//     const fileName:string = `products-${Date.now()}-cover.${ext}`;
//     cd(null,fileName);
// }
// })




const uploadOptions = (fileTypes: string[]): multer.Multer => {
    const multerStorage: multer.StorageEngine = multer.memoryStorage();
    const multerFilter = function (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback): void {
        const isValidType: boolean = fileTypes.some((type) => file.mimetype.startsWith(type));
        if (isValidType) {
            cb(null, true);
        } else {
            cb(new ApiErrors('the file type is not allowed', 400))
        }

    };
    return multer({storage: multerStorage, fileFilter: multerFilter});
};


export const uploadSingleFile = (fileTypes: string[], fieldName: string) => uploadOptions(fileTypes).single(fieldName);
export const uploadMultiFiles = (fileTypes: string[], fields: Fields[]) => uploadOptions(fileTypes).fields(fields);