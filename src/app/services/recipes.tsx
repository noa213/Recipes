import axios from "axios";
import { IRecipe } from "@/app/types/recipe";

export const getRecipes = async (): Promise<IRecipe[]> => {
  return (await axios.get("http://localhost:3000")).data;
};

// export const getUserById = async (id: string) => {
//   return (await axios.get(`https://dummyjson.com/users/${id}`)).data;
// };
