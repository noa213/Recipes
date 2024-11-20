// import Document from "mongoose";

export interface IRecipe {
  _id?: string;
  name: string;
  category: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  isFavorite: boolean;
}


