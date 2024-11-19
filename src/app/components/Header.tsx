"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NewRecipe from "./NewRecipe";
import { useRecipeStore } from "../store/store";
import RecipeCard from "./RecipeCard";
import { getRecipes } from "../services/recipes";

function Header() {
  const recipes = useRecipeStore((state) => state.recipes);
  const setRecipes = useRecipeStore((state) => state.setRecipes);
  const loaded = useRecipeStore((state) => state.loaded);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [selectedCategory, setSelectedCategory] = useState(""); // Category filter state

  useEffect(() => {
    const fetchData = async () => {
      if (!loaded) {
        try {
          const response = await getRecipes();
          setRecipes(response);
          setFilteredRecipes(response);
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
        (recipe) => recipe.category === selectedCategory
      );
    }

    return filtered;
  }, [recipes, value, selectedCategory]);

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
        <Toolbar className="px-8 py-4 flex justify-between items-center">
          <Typography
            variant="h6"
            component="div"
            className="font-bold text-4xl tracking-wide"
            style={{
              color: "#212121",
            }}
          >
            RECIPES
          </Typography>

          <div className="flex items-center space-x-4">
            {/* <select
              onChange={handleCategoryChange}
              className="bg-[#A8C686] text-gray-800 rounded-lg px-6 py-3 focus:outline-none transition-all duration-500 ease-in-out shadow-lg hover:bg-[#C4E5A7] cursor-pointer transform hover:scale-105"
>              <option value="">All Categories</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Dessert">Dessert</option>
            </select>{" "} */}

            <div className="relative inline-block w-64">
              <select
                onChange={handleCategoryChange}
                className="w-full bg-[#DFF2D8] text-gray-800 border border-[#A8C686] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C4E5A7] shadow-md transition-all duration-300 ease-in-out appearance-none cursor-pointer"
              >
>              <option value="">All Categories</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Dessert">Dessert</option>
              </select>
            </div>

            <div className="relative flex items-center bg-[#f1f1f1] rounded-full">
              <InputBase
                placeholder="Search"
                startAdornment={<SearchIcon className="text-gray-400" />}
                className="text-gray-700 bg-transparent pl-3 pr-4 py-2 rounded-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9B111E] transition duration-200 ease-in-out"
              />
            </div>
            <Button
              className="bg-[#9B111E] hover:bg-[#D32F2F] text-white font-semibold py-2 px-5 rounded-full transition duration-200 ease-in-out shadow-md"
              onClick={handleClickOpen}
            >
              New Recipe
            </Button>
          </div>
        </Toolbar>

        <Tabs
          value={value}
          onChange={handleChange}
          className="bg-[#f7f2e7] text-gray-700 mt-2 px-4"
          TabIndicatorProps={{
            style: { background: "#9B111E" },
          }}
          textColor="inherit"
        >
          <Tab
            label="All Recipes"
            sx={{
              color: value === 0 ? "#9B111E" : "#374151",
              "&.mui-selected": { color: "#9B111E" },
            }}
          />
          <Tab
            label="Favorites"
            sx={{
              color: value === 1 ? "#9B111E" : "#374151",
              "&.mui-selected": { color: "#9B111E" },
            }}
          />
        </Tabs>
      </AppBar>
      <NewRecipe open={open} onClose={handleClose} />
      <div className="mt-6">
        <RecipeCard recipes={memoizedFilteredRecipes} />
      </div>
    </>
  );
}

export default Header;
