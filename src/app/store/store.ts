// // store/useRecipeStore.ts
// import { create } from "zustand";
// import { IRecipe } from "../types/recipe";
// // הגדרת סוג המתכון
// // export interface IRecipe {
// //   id: string;
// //   name: string;
// //   category: string;
// //   ingredients: string;
// //   instructions: string;
// //   image: string;
// //   isFavorite: boolean;
// // }

// // סוג ה-state והפונקציות שאנחנו רוצים ב-store
// interface RecipeState {
//   recipes: IRecipe[]; // רשימת המתכונים
//   addRecipe: (recipe: IRecipe) => void; // פונקציה להוסיף מתכון
//   removeRecipe: (id: string) => void; // פונקציה למחוק מתכון
//   toggleFavorite: (id: string) => void; // פונקציה לשנות את ה-isFavorite
// }

// // יצירת store עם Zustand
// export const useRecipeStore = create<RecipeState>((set) => ({
//   recipes: [],
//   addRecipe: (recipe) =>
//     set((state) => ({ recipes: [...state.recipes, recipe] })),
//   removeRecipe: (id) =>
//     set((state) => ({
//       recipes: state.recipes.filter((recipe) => recipe.id !== id),
//     })),
//   toggleFavorite: (id) =>
//     set((state) => ({
//       recipes: state.recipes.map((recipe) =>
//         recipe.id === id
//           ? { ...recipe, isFavorite: !recipe.isFavorite }
//           : recipe
//       ),
//     })),
// }));