

"use client";
import React, { useEffect, useState } from "react";
import { getRecipes } from "@/app/services/recipes";
import RecipeCard from "@/app/components/RecipeCard";
import { IRecipe } from "@/app/types/recipe";
import Header from "@/app/components/Header";
import Filter from "@/app/components/Filter";

const Page = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]); // כל המתכונים
  const [filteredRecipes, setFilteredRecipes] = useState<IRecipe[]>([]); // המתכונים המסוננים
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // הקטגוריה שנבחרה

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRecipes();
      setRecipes(response);
      setFilteredRecipes(response); // ברירת מחדל - כל המתכונים
    };

    fetchData();
  }, []);

  return (
    <div>
      <Filter
        recipes={recipes}
        selectedCategory={selectedCategory}
        setFilteredRecipes={setFilteredRecipes} // מעביר את פונקציית ה-set כדי לעדכן את המתכונים המסוננים
        setSelectedCategory={setSelectedCategory} // מעביר את פונקציית ה-set כדי לעדכן את הקטגוריה הנבחרת
      />
      {/* אם אין מתכונים מסוננים, הצג הודעת "אין מתכונים מתאימים" */}
      {filteredRecipes.length === 0 ? (
        <p>No recipes match the selected category.</p>
      ) : (
        <RecipeCard recipes={filteredRecipes} />
      )}
    </div>
  );
};

export default Page;
