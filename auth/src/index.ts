import express from "express";

const app = express();
app.use(express.json());

app.use((req, _res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get("/api/users/currentuser", (req, res) => {
  res.send({ currentUser: null });
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
