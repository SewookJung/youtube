import multer from "multer";
import routes from "../routers/routes";

const multerVideo = multer({ dest: "upload/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "youtube";
  res.locals.routes = routes;
  res.locals.user = {
    identificated: true,
    id: 1
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
