import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";
import connectDB from "./db/connect.js";

import discussionRouter from "./routes/discussionRouter.js";
import authRouter from "./routes/authRoutes.js";

import notFoundMiddleware from "./middlewares/not-found.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/discussion", discussionRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
