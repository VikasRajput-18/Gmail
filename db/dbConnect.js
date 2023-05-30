import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully Connect with DB");
  } catch (error) {
    console.log("Error while connecting with DB", error.message);
  }
};

export default connectToDB;
