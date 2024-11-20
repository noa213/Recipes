// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI || "";

// const connect = async () => {
//   try {
//     console.log("data mongo ",MONGODB_URI);
    
//     await mongoose.connect(MONGODB_URI);
//     console.log("mongoDB connected...");
    
//   } catch (error) {
//     throw new Error("Error in connecting to mongo db. " + error);
//   }
// };

// export default connect;



// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI || "";

// const connect = async () => {
//   try {
//     console.log("Connecting to MongoDB at", MONGODB_URI); // הודעת דיבוג להדפסת ה-URI
//     await mongoose.connect(MONGODB_URI);
//     console.log("MongoDB connected...");
//   } catch (error) {
//     if (error instanceof Error) {
//       // כעת ה-TypeScript יודע שזו שגיאה מסוג Error
//       console.error("Error in connecting to MongoDB:", error.message); // הדפסת פרטי השגיאה
//       throw new Error("Error in connecting to mongo db. " + error.message);
//     } else {
//       // אם לא מדובר בשגיאת Error (למשל אובייקט אחר), תוכל להתמודד איתה כאן
//       console.error("Unknown error occurred:", error);
//       throw new Error("Unknown error occurred while connecting to MongoDB.");
//     }
//   }
// };

// export default connect;




import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

const connect = async () => {
  try {
    // בדוק אם כבר יש חיבור פעיל
    if (mongoose.connection.readyState >= 1) {
      console.log("MongoDB is already connected.");
      return;
    }

    console.log("Connecting to MongoDB at", MONGODB_URI); // הודעת דיבוג להדפסת ה-URI
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected...");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error in connecting to MongoDB:", error.message); // הדפסת פרטי השגיאה
      throw new Error("Error in connecting to MongoDB: " + error.message);
    } else {
      console.error("Unknown error occurred:", error);
      throw new Error("Unknown error occurred while connecting to MongoDB.");
    }
  }
};

export default connect;
