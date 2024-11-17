




"use client";
// Filter.tsx
import React, { useEffect } from "react";
import { IRecipe } from "@/app/types/recipe";

interface FilterProps {
  recipes: IRecipe[];
  selectedCategory: string;
  setFilteredRecipes: React.Dispatch<React.SetStateAction<IRecipe[]>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>; // פונקציה לעדכון הקטגוריה
}

const Filter: React.FC<FilterProps> = ({
  recipes,
  selectedCategory,
  setFilteredRecipes,
  setSelectedCategory,
}) => {
  useEffect(() => {
    if (selectedCategory) {
      const filtered = recipes.filter((recipe) => recipe.category === selectedCategory);
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipes); // אם לא נבחרה קטגוריה, מציג את כל המתכונים
    }
  }, [recipes, selectedCategory, setFilteredRecipes]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory); // עדכון הקטגוריה שנבחרה
  };

  return (
    <div>
      
      <select
        id="categoryFilter"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="bg-gray-200 text-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9B111E] transition duration-200 ease-in-out absolute right-0"
      >
        <option value="">  Filter by category...</option>
        <option value="Sweet">Sweet</option>
        <option value="Savory">Savory</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
};

export default Filter;
