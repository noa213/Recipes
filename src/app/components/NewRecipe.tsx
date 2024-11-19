import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { IRecipe } from "../types/recipe";
import { useRecipeStore } from "../store/store";
import { addRecipe } from "../services/recipes";
import DeleteIcon from "@mui/icons-material/Delete";

interface NewRecipeDialogProps {
  open: boolean;
  onClose: () => void;
}

const NewRecipe: React.FC<NewRecipeDialogProps> = ({ open, onClose }) => {
  const [newRecipe, setNewRecipe] = useState<IRecipe>({
    name: "",
    category: "",
    ingredients: [""],
    instructions: [""],
    image: "",
    isFavorite: false,
  });
  const addRecipeStore = useRecipeStore((state) => state.addRecipe);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number,
    field?: "ingredients" | "instructions"
  ) => {
    const { name, value } = e.target;

    if (field === "ingredients") {
      const newIngredients = [...newRecipe.ingredients];
      if (index !== undefined) {
        newIngredients[index] = value; // עדכון רכיב לפי אינדקס
      }
      setNewRecipe((prev) => ({
        ...prev,
        ingredients: newIngredients,
      }));
    } else if (field === "instructions") {
      const newInstructions = [...newRecipe.instructions];
      if (index !== undefined) {
        newInstructions[index] = value; // עדכון הוראה לפי אינדקס
      }
      setNewRecipe((prev) => ({
        ...prev,
        instructions: newInstructions,
      }));
    } else {
      setNewRecipe((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAddField = (field: "ingredients" | "instructions") => {
    if (field === "ingredients") {
      setNewRecipe((prev) => ({
        ...prev,
        ingredients: [...prev.ingredients, ""], // מוסיפים רכיב חדש
      }));
    } else if (field === "instructions") {
      setNewRecipe((prev) => ({
        ...prev,
        instructions: [...prev.instructions, ""], // מוסיפים הוראה חדשה
      }));
    }
  };

  const handleRemoveField = (
    index: number,
    field: "ingredients" | "instructions"
  ) => {
    if (field === "ingredients") {
      const newIngredients = newRecipe.ingredients.filter(
        (_, i) => i !== index
      );
      setNewRecipe((prev) => ({
        ...prev,
        ingredients: newIngredients,
      }));
    } else if (field === "instructions") {
      const newInstructions = newRecipe.instructions.filter(
        (_, i) => i !== index
      );
      setNewRecipe((prev) => ({
        ...prev,
        instructions: newInstructions,
      }));
    }
  };

  const handleSubmit = async () => {
    const response = await addRecipe(newRecipe);
    addRecipeStore(response);
    setNewRecipe({
      name: "",
      category: "",
      ingredients: [""],
      instructions: [""],
      image: "",
      isFavorite: false,
      });
    onClose();
  };

  const handleClose = () => {
    setNewRecipe({
      name: "",
      category: "",
      ingredients: [""],
      instructions: [""],
      image: "",
      isFavorite: false,
    });
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

        {newRecipe.ingredients.map((ingredient, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <TextField
              margin="dense"
              label={`Ingredient ${index + 1}`}
              type="text"
              fullWidth
              variant="outlined"
              name="ingredients"
              value={ingredient}
              onChange={(e) => handleInputChange(e, index, "ingredients")} // עדכון רכיב לפי אינדקס
            />

            {index === newRecipe.ingredients.length - 1 && (
              <Button
                onClick={() => handleAddField("ingredients")}
                color="primary"
                variant="outlined"
                style={{ marginLeft: "10px" }}
              >
                +
              </Button>
            )}

            {newRecipe.ingredients.length > 1 && (
              <IconButton
                onClick={() => handleRemoveField(index, "ingredients")}
                color="secondary"
                style={{ marginLeft: "10px" }}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </div>
        ))}

        {newRecipe.instructions.map((instruction, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <TextField
              margin="dense"
              label={`Instruction ${index + 1}`}
              type="text"
              fullWidth
              variant="outlined"
              name="instructions"
              value={instruction}
              onChange={(e) => handleInputChange(e, index, "instructions")} // עדכון הוראה לפי אינדקס
            />

            {index === newRecipe.instructions.length - 1 && (
              <Button
                onClick={() => handleAddField("instructions")}
                color="primary"
                variant="outlined"
                style={{ marginLeft: "10px" }}
              >
                +
              </Button>
            )}

            {newRecipe.instructions.length > 1 && (
              <IconButton
                onClick={() => handleRemoveField(index, "instructions")}
                color="secondary"
                style={{ marginLeft: "10px" }}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </div>
        ))}

        <TextField
          margin="dense"
          label="Image URL"
          type="text"
          fullWidth
          variant="outlined"
          name="image"
          value={newRecipe.image}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
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
