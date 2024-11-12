import Document from "mongoose";

export interface IRecipe extends Document{
    name: string;
    category: string;
    ingredients: string;
    instructions: string;
    image: string;
    isFavorite: boolean;
}