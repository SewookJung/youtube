import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("home home"));
userRouter.get("/edit", (req, res) => res.send("edit"));
userRouter.get("/password", (req, res) => res.send("password"));
