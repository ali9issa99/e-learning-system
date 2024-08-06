import mongoose from "mongoose";

const connectToDatabase = async () => {
  await mongoose.connect(`mongodb://localhost:27017/e-learning`);

  console.log("Connected to database");
};

export default connectToDatabase;

