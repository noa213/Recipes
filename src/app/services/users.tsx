import axios from "axios";
import { IUser } from "@/app/types/user";




export const getUser = async (): Promise<IUser[]> => {
 
  try {
    const response = await axios.get("/api/users");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch user");
  }
};


export const addUser = async (newUser: IUser): Promise<IUser> => {
  try {
    const response = await axios.post("/api/users", newUser);
    return response.data.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw new Error("Failed to add user");
  }
};



// export const updateFavorite = async (
//   id: string,
// ): Promise<IRecipe> => {
//   try {
//     const response = await axios.put(`/api/recipes/${id}`);
//     return response.data.data;
//   } catch (error) {
//     console.error("Error updating favorite status:", error);
//     throw new Error("Failed to update favorite status");
//   }
// };
// export const getUserById = async (id: string) => {
//   return (await axios.get(`https://dummyjson.com/users/${id}`)).data;
// };


