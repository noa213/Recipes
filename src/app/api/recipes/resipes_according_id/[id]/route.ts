import connect from "@/app/lib/db/mongo-db";
import Recipe from "@/app/lib/moduls/recipe";
import { NextRequest, NextResponse } from "next/server";

// הגדרת סוג עבור params
type Params = {
  id: string;
};

export async function PUT(req: NextRequest, { params }: { params: Params }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json(
      { message: "ID is missing in params" },
      { status: 400 }
    );
  }

  try {
    await connect();
    const updatedRecipe = await Recipe.findById(id);

    if (!updatedRecipe) {
      return NextResponse.json(
        { message: "Recipe not found" },
        { status: 404 }
      );
    }

    const updated = await Recipe.findByIdAndUpdate(
      id,
      { $set: { isFavorite: !updatedRecipe.isFavorite } },
      { new: true }
    );
    return NextResponse.json({ updated });
  } catch (error) {
    return NextResponse.json({ message: "Error: " + error }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connect();
    const { id } = params;
    const deletedRecipe = await Recipe.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return NextResponse.json(
        { message: "Recipe not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Recipe deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error: " + (error as Error).message },
      { status: 500 }
    );
  }
}
