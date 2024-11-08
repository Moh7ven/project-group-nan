import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connect successfully! "))
    .catch(() => console.log("MongoDB connect failed !"));
};

export default connectDB;
