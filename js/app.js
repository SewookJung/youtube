import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "../routers/userRouter";
import videoRouter from "../routers/videoRouter";
import globalRouter from "../routers/globalRouter";
import routes from "../routers/routes";

const app = express();

//Middleware
app.use(helmet()); //For security
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

//Routers
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
