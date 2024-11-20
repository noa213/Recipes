import connect from "@/app/lib/db/mongo-db";
import Recipe from "@/app/lib/moduls/recipe";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const data = await Recipe.find();
    console.log(data);
    
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json("Error in fetching " + error);
  }
}

export async function POST(req: NextRequest) {
  try {
    await connect();
    const { name, category, ingredients, instructions, image, isFavorite } = await req.json();
    console.log('post func in ruote name');
    const recipe = new Recipe({ name, category, ingredients, instructions, image, isFavorite});
    console.log('post func in ruote category');
    await recipe.save();
    console.log('post func in ruote image');
    
    // return await GET();
    return NextResponse.json({ newRecipe: recipe });
  } catch (error) {
    return NextResponse.json({ message: "Error: " + error }, { status: 500 });
  }
}
