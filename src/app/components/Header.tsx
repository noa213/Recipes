"use client"
import React, { useEffect, useMemo, useState } from "react";
import {
  AppBar,
} from "@mui/material";
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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  
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
        <RecipeCard recipes={memoizedFilteredRecipes} />
      </div>
    </>
  );
}

export default Header;
