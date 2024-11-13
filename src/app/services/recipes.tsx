import axios from "axios";
import { IRecipe } from "@/app/types/recipe";

export const getRecipes = async (): Promise<IRecipe[]> => {
  // return (await axios.get("/api/recipes")).data;
  try {
    const response = await axios.get("/api/recipes");    
    return response.data.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw new Error("Failed to fetch recipes");
  }};


  export const addRecipe = async (newRecipe: IRecipe): Promise<IRecipe> => {
    try {
      const response = await axios.post("/api/recipes", newRecipe);  // נשלח בקשת POST עם המתכון החדש
      return response.data.data;  // החזרת המתכון שנשמר בשרת
    } catch (error) {
      console.error("Error adding recipe:", error);
      throw new Error("Failed to add recipe");
    }
  };
// export const getUserById = async (id: string) => {
//   return (await axios.get(`https://dummyjson.com/users/${id}`)).data;
// };
