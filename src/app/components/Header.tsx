// "use client";
// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   InputBase,
//   Button,
//   Tabs,
//   Tab,
// } from "@mui/material";

// import SearchIcon from "@mui/icons-material/Search";
// // import NewRecipe from "./NewRecipe"; // יבוא של הקומפוננטה שמטפלת במודאל

// function Header() {
//   // const [value, setValue] = React.useState(0);
//   // const [open, setOpen] = React.useState(false); // מצב לפתיחה וסגירה של המודאל
//   const [value, setValue] = useState(0);

//   // טיפול בשינוי של הטאבים
//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   // טיפול בפתיחה של המודאל
//   const handleClickOpen = () => {
//     // setOpen(true);
//   };

//   // טיפול בסגירת המודאל
//   // const handleClose = () => {
//   //   setOpen(false);
//   // };

//   return (
//     <>
//       <AppBar position="static" className="bg-white shadow-md">
//         <Toolbar className="px-8 py-4 flex justify-between items-center">
//           <Typography
//             variant="h6"
//             component="div"
//             className="text-gray-800 font-bold text-2xl"
//           >
//             RECIPES
//           </Typography>

//           <div className="flex items-center space-x-4">
//             <select className="bg-gray-200 text-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out">
//               {/* אפשרויות לבחירה */}
//             </select>

//             <div className="relative flex items-center bg-gray-100 rounded-full">
//               <InputBase
//                 placeholder="Search"
//                 startAdornment={<SearchIcon className="text-gray-400" />}
//                 className="text-gray-700 bg-transparent pl-3 pr-4 py-2 rounded-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
//               />
//             </div>

//             <Button
//               className="bg-[#c0ae98] hover:bg-[#ad9c8b] text-white font-semibold py-2 px-5 rounded-full transition duration-200 ease-in-out shadow"
//               onClick={handleClickOpen} // פותח את המודאל
//             >
//               New Recipe
//             </Button>
//           </div>
//         </Toolbar>

//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//           className="bg-gray-100 text-gray-800 mt-2 px-4"
//           indicatorColor="primary"
//           textColor="primary"
//         >
//           <Tab label="All Recipes" className="text-gray-800 font-medium" />
//           <Tab label="Favorites" className="text-gray-800 font-medium" />
//         </Tabs>
//       </AppBar>

//       {/* <NewRecipe open={open} onClose={handleClose} /> */}
//     </>
//   );
// }

// export default Header;




// "use client";
// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   InputBase,
//   Button,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// function Header() {
//   const [value, setValue] = useState(0);

//   // טיפול בשינוי של הטאבים
//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <AppBar
//         position="static"
//         className="bg-white shadow-lg"
//         style={{
//           background: "rgba(255, 255, 255, 0.7)", // רקע חצי שקוף עם לבן (מתמזג עם הרקע)
//           backdropFilter: "blur(10px)", // טשטוש עדין לרקע התמונה שמאחור
//         }}
//       >
//         <Toolbar className="px-8 py-4 flex justify-between items-center">
//           <Typography
//             variant="h6"
//             component="div"
//             className="font-extrabold text-4xl tracking-wide"
//             style={{
//               color: "#3c2e1f", // צבע כהה חמים שיתפוס את העין
//             }}
//           >
//             RECIPES
//           </Typography>

//           <div className="flex items-center space-x-4">
//             <select
//               className="bg-gray-200 text-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c0ae98] transition duration-200 ease-in-out"
//             >
//               {/* אפשרויות לבחירה */}
//             </select>

//             <div className="relative flex items-center bg-gray-100 rounded-full">
//               <InputBase
//                 placeholder="Search"
//                 startAdornment={<SearchIcon className="text-gray-400" />}
//                 className="text-gray-700 bg-transparent pl-3 pr-4 py-2 rounded-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c0ae98] transition duration-200 ease-in-out"
//               />
//             </div>

//             <Button
//               className="bg-[#c0ae98] hover:bg-[#ad9c8b] text-white font-semibold py-2 px-5 rounded-full transition duration-200 ease-in-out shadow-md"
//               // onClick={handleClickOpen} // פותח את המודאל
//             >
//               New Recipe
//             </Button>
//           </div>
//         </Toolbar>

//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//           className="bg-[#f4f1e1] text-[#3c2e1f] mt-2 px-4"
//           indicatorColor="primary"
//           textColor="primary"
//         >
//           <Tab label="All Recipes" className="font-medium text-[#3c2e1f]" />
//           <Tab label="Favorites" className="font-medium text-[#3c2e1f]" />
//         </Tabs>
//       </AppBar>
//     </>
//   );
// }

// export default Header;





// "use client";
// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   InputBase,
//   Button,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// function Header() {
//   const [value, setValue] = useState(0);

//   // טיפול בשינוי של הטאבים
//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <AppBar
//         position="static"
//         className="bg-white shadow-lg"
//         style={{
//           background: "rgba(255, 255, 255, 0.7)", // רקע חצי שקוף עם לבן (מתמזג עם הרקע)
//           backdropFilter: "blur(10px)", // טשטוש עדין לרקע התמונה שמאחור
//         }}
//       >
//         <Toolbar className="px-8 py-4 flex justify-between items-center">
//           <Typography
//             variant="h6"
//             component="div"
//             className="font-extrabold text-4xl tracking-wide"
//             style={{
//               color: "#4a2c1b", // גוון חום כהה, בהשראת הצבעים בתמונה
//             }}
//           >
//             RECIPES
//           </Typography>

//           <div className="flex items-center space-x-4">
//             <select
//               className="bg-gray-200 text-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e57c5c] transition duration-200 ease-in-out"
//             >
//               {/* אפשרויות לבחירה */}
//             </select>

//             <div className="relative flex items-center bg-gray-100 rounded-full">
//               <InputBase
//                 placeholder="Search"
//                 startAdornment={<SearchIcon className="text-gray-400" />}
//                 className="text-gray-700 bg-transparent pl-3 pr-4 py-2 rounded-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e57c5c] transition duration-200 ease-in-out"
//               />
//             </div>

//             <Button
//               className="bg-[#e57c5c] hover:bg-[#d66c53] text-white font-semibold py-2 px-5 rounded-full transition duration-200 ease-in-out shadow-md"
//               // onClick={handleClickOpen} // פותח את המודאל
//             >
//               New Recipe
//             </Button>
//           </div>
//         </Toolbar>

//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//           className="bg-[#f4f1e1] text-[#4a2c1b] mt-2 px-4"
//           indicatorColor="primary"
//           textColor="primary"
//         >
//           <Tab label="All Recipes" className="font-medium text-[#4a2c1b]" />
//           <Tab label="Favorites" className="font-medium text-[#4a2c1b]" />
//         </Tabs>
//       </AppBar>
//     </>
//   );
// }

// export default Header;

// "use client";
// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   InputBase,
//   Button,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// function Header() {
//   const [value, setValue] = useState(0);

//   // טיפול בשינוי של הטאבים
//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <AppBar
//         position="static"
//         className="shadow-lg"
//         style={{
//           background: "#fff", // רקע לבן, בהיר ונקי
//           backdropFilter: "blur(10px)", // טשטוש עדין של התמונה ברקע
//         }}
//       >
//         <Toolbar className="px-8 py-4 flex justify-between items-center">
//           <Typography
//             variant="h6"
//             component="div"
//             className="font-extrabold text-4xl tracking-wide"
//             style={{
//               color: "#2e280d", // חום כהה (הצבע שלך מהתמונה)
//             }}
//           >
//             RECIPES
//           </Typography>

//           <div className="flex items-center space-x-4">
//             <select
//               className="bg-gray-200 text-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#71040b] transition duration-200 ease-in-out"
//             >
//               {/* אפשרויות לבחירה */}
//             </select>

//             <div className="relative flex items-center bg-gray-100 rounded-full">
//               <InputBase
//                 placeholder="Search"
//                 startAdornment={<SearchIcon className="text-gray-400" />}
//                 className="text-gray-700 bg-transparent pl-3 pr-4 py-2 rounded-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#71040b] transition duration-200 ease-in-out"
//               />
//             </div>

//             <Button
//               className="bg-[#71040b] hover:bg-[#8b2a1f] text-white font-semibold py-2 px-5 rounded-full transition duration-200 ease-in-out shadow-md"
//               // onClick={handleClickOpen} // פותח את המודאל
//             >
//               New Recipe
//             </Button>
//           </div>
//         </Toolbar>

//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//           className="bg-[#f7f2e7] text-[#2e280d] mt-2 px-4" // רקע בהיר, צבע חום כהה לטקסט
//           indicatorColor="primary"
//           textColor="primary"
//         >
//           <Tab
//             label="All Recipes"
//             className="font-medium text-[#2e280d]" // חום כהה
//           />
//           <Tab
//             label="Favorites"
//             className="font-medium text-[#2e280d]" // חום כהה
//           />
//         </Tabs>
//       </AppBar>
//     </>
//   );
// }

// export default Header;






// "use client";
// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   InputBase,
//   Button,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// function Header() {
//   const [value, setValue] = useState(0);

//   // טיפול בשינוי של הטאבים
//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <AppBar
//         position="static"
//         className="shadow-lg"
//         style={{
//           background: "#fff", // רקע לבן, בהיר ונקי
//           backdropFilter: "blur(10px)", // טשטוש עדין של התמונה ברקע
//         }}
//       >
//         <Toolbar className="px-8 py-4 flex justify-between items-center">
//           <Typography
//             variant="h6"
//             component="div"
//             className="font-extrabold text-4xl tracking-wide"
//             style={{
//               color: "#2e280d", // חום כהה (הצבע שלך מהתמונה)
//             }}
//           >
//             RECIPES
//           </Typography>

//           <div className="flex items-center space-x-4">
//             <select
//               className="bg-gray-200 text-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b050b] transition duration-200 ease-in-out"
//             >
//               {/* אפשרויות לבחירה */}
//             </select>

//             <div className="relative flex items-center bg-gray-100 rounded-full">
//               <InputBase
//                 placeholder="Search"
//                 startAdornment={<SearchIcon className="text-gray-400" />}
//                 className="text-gray-700 bg-transparent pl-3 pr-4 py-2 rounded-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7b050b] transition duration-200 ease-in-out"
//               />
//             </div>

//             <Button
//               className="bg-[#7b050b] hover:bg-[#9b1419] text-white font-semibold py-2 px-5 rounded-full transition duration-200 ease-in-out shadow-md"
//               // onClick={handleClickOpen} // פותח את המודאל
//             >
//               New Recipe
//             </Button>
//           </div>
//         </Toolbar>

//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//           className="bg-[#f7f2e7] text-[#2e280d] mt-2 px-4" // רקע בהיר, צבע חום כהה לטקסט
//           indicatorColor="primary"
//           textColor="primary"
//         >
//           <Tab
//             label="All Recipes"
//             className="font-medium text-[#2e280d]" // חום כהה
//           />
//           <Tab
//             label="Favorites"
//             className="font-medium text-[#2e280d]" // חום כהה
//           />
//         </Tabs>
//       </AppBar>
//     </>
//   );
// }

// export default Header;




// "use client";
// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   InputBase,
//   Button,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// function Header() {
//   const [value, setValue] = useState(0);

//   // טיפול בשינוי של הטאבים
//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <AppBar
//         position="static"
//         className="shadow-lg"
//         style={{
//           background: "#fff", // רקע לבן בהיר
//           backdropFilter: "blur(10px)", // טשטוש עדין של התמונה ברקע
//         }}
//       >
//         <Toolbar className="px-8 py-4 flex justify-between items-center">
//           <Typography
//             variant="h6"
//             component="div"
//             className="font-extrabold text-4xl tracking-wide"
//             style={{
//               color: "#212121", // שחור (לכותרת האתר, עם ניגוד חזק)
//             }}
//           >
//             RECIPES
//           </Typography>

//           <div className="flex items-center space-x-4">
//             <select
//               className="bg-gray-200 text-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9B111E] transition duration-200 ease-in-out"
//             >
//               {/* אפשרויות לבחירה */}
//             </select>

//             <div className="relative flex items-center bg-gray-100 rounded-full">
//               <InputBase
//                 placeholder="Search"
//                 startAdornment={<SearchIcon className="text-gray-400" />}
//                 className="text-gray-700 bg-transparent pl-3 pr-4 py-2 rounded-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9B111E] transition duration-200 ease-in-out"
//               />
//             </div>

//             <Button
//               className="bg-[#9B111E] hover:bg-[#D32F2F] text-white font-semibold py-2 px-5 rounded-full transition duration-200 ease-in-out shadow-md"
//               // onClick={handleClickOpen} // פותח את המודאל
//             >
//               New Recipe
//             </Button>
//           </div>
//         </Toolbar>

//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//           className="bg-[#f7f2e7] text-[#212121] mt-2 px-4" // רקע בהיר עם צבע שחור לטקסט
//           indicatorColor="primary"
//           textColor="primary"
//         >
//           <Tab
//             label="All Recipes"
//             className="font-medium text-[#212121]" // שחור עבור הטאב הראשון
//           />
//           <Tab
//             label="Favorites"
//             className="font-medium text-[#212121]" // שחור עבור הטאב השני
//           />
//         </Tabs>
//       </AppBar>
//     </>
//   );
// }

// export default Header;



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

function Header() {
  const [value, setValue] = useState(0);
  // const [open, setOpen] = useState(false); 
  // טיפול בשינוי של הטאבים
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  // טיפול בפתיחה של המודאל
  const handleClickOpen = () => {
    // setOpen(true);
  };

  // טיפול בסגירת המודאל
  // const handleClose = () => {
  //   setOpen(false);
  // };


  return (
    <>
      {/* <AppBar
        position="static"
        className="shadow-lg"
        style={{
          background: "#fff", // רקע לבן בהיר
          backdropFilter: "blur(10px)", // טשטוש עדין של התמונה ברקע
        }}
      > */}
      <AppBar
      position="static"
      className="shadow-lg"
      style={{
        backgroundColor: "#F5F5F5", // Lighter background
        backdropFilter: "blur(10px)",
      }}
    >
        <Toolbar className="px-8 py-4 flex justify-between items-center">
          <Typography
            variant="h6"
            component="div"
            className="font-extrabold text-4xl tracking-wide"
            style={{
              color: "#212121", // שחור (לכותרת האתר, עם ניגוד חזק)
            }}
          >
            RECIPES
          </Typography>

          <div className="flex items-center space-x-4">
            <select
              className="bg-[#33422b] text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9B111E] transition duration-200 ease-in-out"
            >
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
              onClick={handleClickOpen} // פותח את המודאל
            >
              New Recipe
            </Button>
          </div>
        </Toolbar>

        {/* <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="bg-[#f7f2e7] text-[#212121] mt-2 px-4" // רקע בהיר עם צבע שחור לטקסט
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab
            label="All Recipes"
            className="font-medium text-[#212121]" // שחור עבור הטאב הראשון
          />
          <Tab
            label="Favorites"
            className="font-medium text-[#212121]" // שחור עבור הטאב השני
          />
        </Tabs> */}
        <Tabs
        value={value}
        onChange={handleChange}
        // aria-label="basic tabs example"
        className="bg-[#f7f2e7] text-gray-700 mt-2 px-4" // Lighter background with gray text
        indicatorColor="secondary"
        textColor="secondary"
      >
        {/* #c0281a */}
        <Tab label="All Recipes" />
        <Tab label="Favorites" />
      </Tabs>
      </AppBar>
    </>
  );
}

export default Header;
