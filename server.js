import express from "express";
import mongoose from "mongoose";
import userrouter from "./Routes/userRouter.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT;
const db = process.env.MONGO_URL;

const corsOptions = {
  origin:"http://localhost:3000",
  credentials: true, 
  methods: "GET, POST, PUT, DELETE",
  alloweHeaders: ["Content-Type", "Authorization"],
};

//Database Connection
try {
  mongoose.connect(db);
  console.log("Connection Start");
} catch (error) {
  console.log(error);
}

app.use(express.json());


//router
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/user", userrouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
