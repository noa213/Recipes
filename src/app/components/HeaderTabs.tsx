"use client"
import React from "react";
import {
  Tabs,
  Tab,
} from "@mui/material";

type HeaderTabsProps = {
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void; // פונקציה לטיפול בשינוי הטאב
  };
  
  const HeaderTabs: React.FC<HeaderTabsProps> = ({ value, onChange }) => {
       return (
      <Tabs
        value={value}
        onChange={onChange}
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
    );
  }
  

  export default HeaderTabs;
