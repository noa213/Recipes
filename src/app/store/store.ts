import { create } from "zustand";
import { IRecipe } from "../types/recipe";

interface RecipeState {
  recipes: IRecipe[];
  loaded: boolean;
  setRecipes: (recipes: IRecipe[]) => void;
  addRecipe: (recipe: IRecipe) => void;
  toggleFavorite: (id: string) => void;
  //   removeRecipe: (id: string) => void;
}

export const useRecipeStore = create<RecipeState>((set) => ({
  recipes: [],
  loaded: false,
  setRecipes: (recipes) => set({ recipes, loaded: true }),
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  toggleFavorite: (id) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe._id === id.toString()
          ? { ...recipe, isFavorite: !recipe.isFavorite }
          : recipe
      ),
    })),
  //   removeRecipe: (id) =>
  //     set((state) => ({
  //       recipes: state.recipes.filter((recipe) => recipe.id !== id),
  //     })),
}));
