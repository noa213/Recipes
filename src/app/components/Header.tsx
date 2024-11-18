"use client";
import React, { useState } from "react";
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

function Header() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            className="font-extrabold text-4xl tracking-wide"
            style={{
              color: "#212121",
            }}
          >
            RECIPES
          </Typography>

          <div className="flex items-center space-x-4">
            <select className="bg-[#33422b] text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9B111E] transition duration-200 ease-in-out">
              {/* אפשרויות לבחירה */}
            </select>

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
          // indicatorColor="primary"
          textColor="inherit"
        >
          {/* #c0281a */}
          <Tab  href={`/pages/allRecipes`}
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
    </>
  );
}

export default Header;