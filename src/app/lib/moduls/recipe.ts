import mongoose, { Model, Schema } from "mongoose";
import { IRecipe } from "@/app/types/recipe";

const Recipes: Schema<IRecipe> = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  ingredients: { type: [String], required: true },
  // instructions: { type: String, required: true },
  image: { type: String, required: true },
  isFavorite: { type: Boolean, required: true, default: false },
});

const Recipe: Model<IRecipe> =
  mongoose.models.Recipe || mongoose.model<IRecipe>("recipe", Recipes);

export default Recipe;
