import { NextResponse } from "next/server";
import connect from "@/app/lib/db/mongo-db";
import User from "@/app/lib/moduls/user"; // ייבוא המודל של המשתמש

// פונקציה לטיפול בבקשה POST (ליצירת משתמש חדש)
export async function POST(request: Request) {
  try {
    await connect();
    const body = await request.json();
    const { username, email, password } = body;

    // בדיקת אם כל השדות הוזנו
    if (!username || !password || !email) {
      return NextResponse.json(
        { success: false, message: "שם משתמש, סיסמה ואימייל נדרשים" },
        { status: 400 }
      );
    }

    // חיפוש אם שם המשתמש כבר קיים
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "שם המשתמש כבר קיים" },
        { status: 400 }
      );
    }

    // יצירת משתמש חדש
    const newUser = new User({
      username,
      email,
      password, // שומרים את הסיסמה כפי שהיא
    });
    await newUser.save();

    return NextResponse.json({
      success: true,
      message: "משתמש נוצר בהצלחה",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error creating user:", error);
      return NextResponse.json(
        { success: false, message: "שגיאה ביצירת משתמש", error: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { success: false, message: "שגיאה בלתי צפויה" },
      { status: 500 }
    );
  }
}
