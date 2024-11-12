"use client";
import * as React from "react";
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

function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };  return (
    <AppBar position="static" className="bg-white shadow-md">
      <Toolbar className="px-8 py-4 flex justify-between items-center">
        <Typography
          variant="h6"
          component="div"
          className="text-gray-800 font-bold text-2xl"
        >
          RECIPES
        </Typography>

        <div className="flex items-center space-x-4">
          <select className="bg-gray-200 text-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out">
            {/* אפשרויות לבחירה */}
          </select>

          <div className="relative flex items-center bg-gray-100 rounded-full">
            <InputBase
              placeholder="חפש מתכון"
              startAdornment={<SearchIcon className="text-gray-400" />}
              className="text-gray-700 bg-transparent pl-3 pr-4 py-2 rounded-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
            />
          </div>

          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition duration-200 ease-in-out shadow">
            New Recipe
          </Button>
        </div>
      </Toolbar>

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        className="bg-gray-100 text-gray-800 mt-2 px-4"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="All Recipes" className="text-gray-800 font-medium" />
        <Tab label="Favorite" className="text-gray-800 font-medium" />
      </Tabs>
    </AppBar>
  );
}

export default Header;
