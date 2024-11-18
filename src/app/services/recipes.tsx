import axios from "axios";
import { IRecipe } from "@/app/types/recipe";

export const getRecipes = async (): Promise<IRecipe[]> => {
  try {
    const response = await axios.get("/api/recipes");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw new Error("Failed to fetch recipes");
  }
};

export const addRecipe = async (newRecipe: IRecipe): Promise<IRecipe> => {
  try {
    const response = await axios.post("/api/recipes", newRecipe);
    return response.data.data;
  } catch (error) {
    console.error("Error adding recipe:", error);
    throw new Error("Failed to add recipe");
  }
};

export const updateFavorite = async (id: string): Promise<IRecipe> => {
  try {
    const response = await axios.put(`/api/recipes/resipes_according_id/${id}`);
    return response.data.updated;
  } catch (error) {
    console.error("Error updating favorite status:", error);
    throw new Error("Failed to update favorite status");
  }
};
// export const getUserById = async (id: string) => {
//   return (await axios.get(`https://dummyjson.com/users/${id}`)).data;
// };
