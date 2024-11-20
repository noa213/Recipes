// "use client";
// import React, { useEffect, useMemo, useState } from "react";
// import { AppBar } from "@mui/material";
// import NewRecipe from "./NewRecipe";
// import { useRecipeStore } from "../store/store";
// import RecipeCard from "./RecipeCard";
// import { getRecipes } from "../services/recipes";
// import HeaderTabs from "./HeaderTabs";
// import HeaderToolbar from "./HeaderToolbar";

// function Header() {
//   const recipes = useRecipeStore((state) => state.recipes);
//   const setRecipes = useRecipeStore((state) => state.setRecipes);
//   const loaded = useRecipeStore((state) => state.loaded);
//   const [value, setValue] = useState(0);
//   const [open, setOpen] = useState(false);
//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const recipesPerPage = 4;

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!loaded) {
//         try {
//           const response = await getRecipes();
//           setRecipes(response);
//         } catch (error) {
//           console.error("Failed to fetch recipes:", error);
//         }
//       }
//     };
//     fetchData();
//   }, [loaded, setRecipes]);

//   const memoizedFilteredRecipes = useMemo(() => {
//     let filtered = recipes;

//     if (value === 1) {
//       filtered = filtered.filter((recipe) => recipe.isFavorite);
//     }

//     if (selectedCategory) {
//       filtered = filtered.filter(
//         (recipe) =>
//           recipe.category.toLowerCase() === selectedCategory.toLowerCase()
//       );
//     }

//     if (search) {
//       filtered = filtered.filter((recipe) =>
//         recipe.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     return filtered;
//   }, [recipes, value, selectedCategory, search]);

//   // חיתוך המתכונים לפי העמוד
//   const indexOfLastRecipe = currentPage * recipesPerPage;
//   const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
//   const currentRecipes = memoizedFilteredRecipes.slice(
//     indexOfFirstRecipe,
//     indexOfLastRecipe
//   );

//   const totalPages = Math.ceil(memoizedFilteredRecipes.length / recipesPerPage);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleCategoryChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setSelectedCategory(event.target.value);
//   };

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(event.target.value);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <>
//       <AppBar
//         position="static"
//         className="shadow-lg"
//         style={{
//           backgroundColor: "#F5F5F5",
//           backdropFilter: "blur(10px)",
//         }}
//       >
//         <HeaderToolbar
//           onCategoryChange={handleCategoryChange}
//           onSearchChange={handleSearchChange}
//           onOpenNewRecipe={handleClickOpen}
//           searchValue={search}
//         />
//         <HeaderTabs value={value} onChange={handleChange} />
//       </AppBar>
//       <NewRecipe open={open} onClose={handleClose} />

//       <div className="mt-6">
//         <RecipeCard recipes={currentRecipes} />
//       </div>

//       <div className="flex justify-between items-center mt-6">
//         <button
//           className="px-4 py-2 bg-gray-700 text-white rounded-full disabled:opacity-50 transition-all"
//           onClick={handlePrevious}
//           disabled={currentPage === 1}
//         >
//           &lt;
//         </button>
//         <div className="text-lg font-semibold">
//           {currentPage} / {totalPages}
//         </div>
//         <button
//           className="px-4 py-2 bg-gray-700 text-white rounded-full disabled:opacity-50 transition-all"
//           onClick={handleNext}
//           disabled={currentPage === totalPages}
//         >
//           &gt;
//         </button>
//       </div>
//     </>
//   );
// }

// export default Header;



"use client";
import React, { useEffect, useMemo, useState } from "react";
import { AppBar } from "@mui/material";
import NewRecipe from "./NewRecipe";
import { useRecipeStore } from "../store/store";
import RecipeCard from "./RecipeCard";
import { getRecipes } from "../services/recipes";
import HeaderTabs from "./HeaderTabs";
import HeaderToolbar from "./HeaderToolbar";

function Header() {
  const recipes = useRecipeStore((state) => state.recipes);
  const setRecipes = useRecipeStore((state) => state.setRecipes);
  const loaded = useRecipeStore((state) => state.loaded);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  const [currentPage] = useState(1);
  const recipesPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      if (!loaded) {
        try {
          const response = await getRecipes();
          setRecipes(response);
        } catch (error) {
          console.error("Failed to fetch recipes:", error);
        }
      }
    };
    fetchData();
  }, [loaded, setRecipes]);

  const memoizedFilteredRecipes = useMemo(() => {
    let filtered = recipes;

    if (value === 1) {
      filtered = filtered.filter((recipe) => recipe.isFavorite);
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (recipe) =>
          recipe.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (search) {
      filtered = filtered.filter((recipe) =>
        recipe.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filtered;
  }, [recipes, value, selectedCategory, search]);

  const currentRecipes = recipes 
    ? memoizedFilteredRecipes.slice(
        (currentPage - 1) * recipesPerPage,
        currentPage * recipesPerPage
      )
    : [];

  const totalPages = Math.ceil(memoizedFilteredRecipes.length / recipesPerPage);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // const handleNext = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const handlePrevious = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  return (
    <>
      <AppBar
        position="static"
        className="shadow-lg"
        style={{
          backgroundColor: "#F5F5F5",
          backdropFilter: "blur(10px)",
        }}
      >
        <HeaderToolbar
          onCategoryChange={handleCategoryChange}
          onSearchChange={handleSearchChange}
          onOpenNewRecipe={handleClickOpen}
          searchValue={search}
        />
        <HeaderTabs value={value} onChange={handleChange} />
      </AppBar>
      <NewRecipe open={open} onClose={handleClose} />

      <div className="mt-6">
        <RecipeCard recipes={currentRecipes} />
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-full disabled:opacity-50 transition-all"
          // onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {/* <div className="text-lg font-semibold">
          {currentPage} / {totalPages}
        </div> */}
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-full disabled:opacity-50 transition-all"
          // onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </>
  );
}

export default Header;

