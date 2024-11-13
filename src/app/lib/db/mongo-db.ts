import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

const connect = async () => {
  try {
    console.log("data mongo ",MONGODB_URI);
    
    await mongoose.connect(MONGODB_URI);
    console.log("mongoDB connected...");
    
  } catch (error) {
    throw new Error("Error in connecting to mongo db. " + error);
  }
};

export default connect;
