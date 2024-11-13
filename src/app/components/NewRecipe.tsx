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
  // const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [newRecipe, setNewRecipe] = useState<IRecipe>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // טיפול בשמירת המתכון החדש (לשלוח לשרת או לשמור במצב)
    console.log("New Recipe Submitted:", newRecipe);
    const response = await addRecipe(newRecipe);

    onClose(); // סגור את המודאל אחרי שליחה
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
