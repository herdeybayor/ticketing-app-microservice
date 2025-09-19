import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

import { currentUserRouter } from "./routes/current-user.js";
import { signinRouter } from "./routes/signin.js";
import { signoutRouter } from "./routes/signout.js";
import { signupRouter } from "./routes/signup.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { NotFoundError } from "./errors/not-found-error.js";

const app = express();

// parse json bodies
app.use(express.json());

// logging middleware (dev)
app.use(morgan("dev"));

// routes
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(() => {
  throw new NotFoundError();
});

// error handling middleware
app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("🔗 Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("🚀 Auth service started successfully!");
    console.log("📡 Server listening on port 3000");
    console.log("🌐 Environment: development");
    console.log("✨ Ready to handle authentication requests");
  });
};

start();
