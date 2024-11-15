"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { IRecipe } from "../types/recipe";
import { addRecipe } from "../services/recipes";
interface NewRecipeDialogProps {
  open: boolean;
  onClose: () => void;
}

const NewRecipe: React.FC<NewRecipeDialogProps> = ({ open, onClose }) => {
  const [newRecipe, setNewRecipe] = useState<Partial<IRecipe>>({
    name: "",
    category: "",
    ingredients: [],
    instructions: "",
    image: "",
    isFavorite: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle saving the new recipe
  const handleSubmit = async () => {
    console.log("New Recipe Submitted:", newRecipe);
    const response = await addRecipe(newRecipe);
    console.log("New Recipe Submitted:", response);

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Recipe</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Recipe Name"
          type="text"
          fullWidth
          variant="outlined"
          name="name"
          value={newRecipe.name}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          label="Category"
          type="text"
          fullWidth
          variant="outlined"
          name="category"
          value={newRecipe.category}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          label="Ingredients"
          type="text"
          fullWidth
          variant="outlined"
          name="ingredients"
          value={newRecipe.ingredients}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          label="Instructions"
          type="text"
          fullWidth
          variant="outlined"
          name="instructions"
          value={newRecipe.instructions}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewRecipe;
