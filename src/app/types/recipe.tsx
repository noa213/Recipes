import Document from "mongoose";

export interface IRecipe {
    name: string;
    category: string;
    ingredients: string[];
    instructions: string;
    image: string;
    isFavorite: boolean;
}