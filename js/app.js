import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "../middleware/middlewares";
import userRouter from "../routers/userRouter";
import videoRouter from "../routers/videoRouter";
import globalRouter from "../routers/globalRouter";
import routes from "../routers/routes";

const app = express();

//Middleware
app.use(helmet()); // For security
app.set("view engine", "pug"); // Setting view engine
app.use("/upload", express.static("upload"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

//Routers
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
