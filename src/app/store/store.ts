// store/useRecipeStore.ts
import { create } from "zustand";
import { IRecipe } from "../types/recipe";

interface RecipeState {
  recipes: IRecipe[];
  loaded: boolean;
  setRecipes: (recipes: IRecipe[]) => void;
  addRecipe: (recipe: IRecipe) => void;
  //   removeRecipe: (id: string) => void;
  toggleFavorite: (id: string) => void;
}

// יצירת store עם Zustand
export const useRecipeStore = create<RecipeState>((set) => ({
  recipes: [],
  loaded: false,
  setRecipes: (recipes) => set({ recipes, loaded: true }),
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  //   removeRecipe: (id) =>
  //     set((state) => ({
  //       recipes: state.recipes.filter((recipe) => recipe.id !== id),
  //     })),
  toggleFavorite: (id) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id.toString()
          ? { ...recipe, isFavorite: !recipe.isFavorite }
          : recipe
      ),
    })),
}));
