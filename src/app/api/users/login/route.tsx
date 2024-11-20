import { NextResponse } from "next/server";
import connect from "@/app/lib/db/mongo-db";
import User from "@/app/lib/moduls/user"; // ייבוא המודל של המשתמש

export async function POST(request: Request) {
  try {
    await connect();
    const body = await request.json();
    const { username, password } = body;

    // חיפוש אחר המשתמש
    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json({ message: "משתמש לא נמצא" }, { status: 400 });
    }

    // כאן תוכל לבדוק את הסיסמה (אם תרצה להוסיף hash)
    if (user.password !== password) {
      return NextResponse.json({ message: "סיסמה לא נכונה" }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "התחברת בהצלחה" });

  } catch (error: unknown) {
    // בדיקת אם error הוא מסוג Error
    if (error instanceof Error) {
      return NextResponse.json({ message: "שגיאה בהתחברות", error: error.message }, { status: 500 });
    }
    // במידה והטעות אינה מסוג Error, מחזירים שגיאה כללית
    return NextResponse.json({ message: "שגיאה בלתי צפויה בהתחברות" }, { status: 500 });
  }
}
