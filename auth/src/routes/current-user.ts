import express from "express";
import type { Request, Response } from "express";

const router = express.Router();

router.get("/api/users/currentuser", (_: Request, res: Response) => {
  res.send("Hi there!");
});

export { router as currentUserRouter };
