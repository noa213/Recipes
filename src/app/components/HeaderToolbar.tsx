"use client";
import React from "react";
import { Toolbar, Typography, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type HeaderToolbarProps = {
  onCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onOpenNewRecipe: () => void;
  searchValue: string;
};

const HeaderToolbar: React.FC<HeaderToolbarProps> = ({
  onCategoryChange,
  onSearchChange,
  onOpenNewRecipe,
  searchValue,
}) => {
  return (
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
        <div className="relative inline-block w-64">
          <select
            onChange={onCategoryChange}
            className="w-full bg-[#DFF2D8] text-gray-800 border border-[#A8C686] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C4E5A7] shadow-md transition-all duration-300 ease-in-out appearance-none cursor-pointer"
          >
            <option value="">All Categories</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>

        <div className="relative flex items-center bg-[#f1f1f1] rounded-full shadow-sm">
          <SearchIcon className="absolute left-3 text-gray-400" />
          <InputBase
            placeholder="Search"
            value={searchValue}
            onChange={onSearchChange}
            className="w-full pl-10 pr-4 py-2 rounded-full text-gray-700 bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9B111E] transition duration-200 ease-in-out"
          />
        </div>
        <Button
          className="bg-[#9B111E] hover:bg-[#D32F2F] text-white font-semibold py-2 px-5 rounded-full transition duration-200 ease-in-out shadow-md"
          onClick={onOpenNewRecipe}
        >
          New Recipe
        </Button>
      </div>
    </Toolbar>
  );
};

export default HeaderToolbar;

     

