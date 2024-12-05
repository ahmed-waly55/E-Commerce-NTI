import { Document } from "mongoose";
import { Categories } from "../categories/categories.interface";

export interface Subcategories extends Document{
    readonly name: String;
    readonly category: Categories;
    image: String;

}

