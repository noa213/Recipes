import connect from "@/app/lib/db/mongo-db";
import Recipe from "@/app/lib/moduls/recipe";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const data = await Recipe.find();
    
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json("Error in fetching " + error);
  }
}

export async function POST(req: NextRequest) {
  try {
    await connect();
    const { name, category, ingredients, instructions, image, isFavorite } = await req.json();
    const recipe = new Recipe({ name, category, ingredients, instructions, image, isFavorite});
    await recipe.save();
    return NextResponse.json({ newRecipe: recipe });
  } catch (error) {
    return NextResponse.json({ message: "Error: " + error }, { status: 500 });
  }
}
