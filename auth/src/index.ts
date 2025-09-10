import express from "express";
import morgan from "morgan";

const app = express();

// parse json bodies
app.use(express.json());

// logging middleware (dev)
app.use(morgan("dev"));

app.get("/api/users/currentuser", (req, res) => {
  res.send({ currentUser: null });
});

app.listen(3000, () => {
  console.log("🚀 Auth service started successfully!");
  console.log("📡 Server listening on port 3000");
  console.log("🌐 Environment: development");
  console.log("✨ Ready to handle authentication requests");
});
