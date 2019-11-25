import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "../routers/router";

const app = express();

const handleHome = (req, res) => res.send("Hello from HOME");
const handleProfile = (req, res) => res.send("Profile");

//Middleware
app.use(helmet()); //For security
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

//Routers

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.get("/user", userRouter);

export default app;
