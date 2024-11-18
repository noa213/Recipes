import connect from "@/app/lib/db/mongo-db";
import Recipe from "@/app/lib/moduls/recipe";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connect();
    const { id } = params;
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      { $set: { isFavorite: { $not: "$isFavorite" } } },
      { new: true }
    );
    if (!updatedRecipe) {
      return NextResponse.json(
        { message: "Recipe not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ updatedRecipe });
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
