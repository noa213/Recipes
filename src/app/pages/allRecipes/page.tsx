// "use client";
// import React, { useEffect, useState } from "react";
// import { getRecipes } from "@/app/services/recipes";
// import RecipeCard from "@/app/components/RecipeCard";
// import { IRecipe } from "@/app/types/recipe";
// import { useRecipeStore } from "@/app/store/store";

// import Filter from "@/app/components/Filter";


// const Page = () => {
//   const [filteredRecipes, setFilteredRecipes] = useState<IRecipe[]>([]); // המתכונים המסוננים
//   const [selectedCategory, setSelectedCategory] = useState<string>(""); // הקטגוריה שנבחרה
//   const recipes = useRecipeStore((state) => state.recipes);
//   const setRecipes = useRecipeStore((state) => state.setRecipes);
//   const loaded = useRecipeStore((state) => state.loaded);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!loaded) {
//         try {
//           const response = await getRecipes();
//           setRecipes(response);
//           setFilteredRecipes(response);
//         } catch (error) {
//           console.error("Failed to fetch recipes:", error);
//         }
//       }
//     };
//     fetchData();
//   }, [loaded, setRecipes]);

//   return (
//     <div>
//       <Filter
//         recipes={recipes}
//         selectedCategory={selectedCategory}
//         setFilteredRecipes={setFilteredRecipes} // מעביר את פונקציית ה-set כדי לעדכן את המתכונים המסוננים
//         setSelectedCategory={setSelectedCategory} // מעביר את פונקציית ה-set כדי לעדכן את הקטגוריה הנבחרת
//       />
//       {/* אם אין מתכונים מסוננים, הצג הודעת "אין מתכונים מתאימים" */}
//       {/* {filteredRecipes.length === 0 ? (
//         <p>No recipes match the selected category.</p>
//       ) : (
//         <RecipeCard recipes={filteredRecipes} />
//       )} */}
//     </div>
//   );
// };

// export default Page;


import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page