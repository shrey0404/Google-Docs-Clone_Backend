import mongoose from "mongoose";

const Connection = () => {
  const URL = `${process.env.MONGO_URL}`;

  try {
    mongoose.connect(URL);
    console.log("Database connected successfully !!");
  } catch (error) {
    console.log("Error while connecting with the databse ", error);
  }
};

export default Connection;
