

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const response = await fetch("/api/users/signup", { // נתיב נפרד להרשמה
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        window.location.href = "pages/allRecipes";
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "שגיאה בהרשמה");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      setErrorMessage("שגיאה בשרת. נסה שנית.");
    }
  };

  return (
<div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-fixed bg-[url('https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg')]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
              שם משתמש
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="הזן את שם המשתמש שלך"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              מייל
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="הזן את כתובת המייל שלך"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
              סיסמה
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="בחר סיסמה"
            />
          </div>

          {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}

          <button
            type="button"
            onClick={handleSignUp}
            className="w-full bg-pink-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default SignUp;
