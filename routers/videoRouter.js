import express from "express";
import routes from "./routes";
import {
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo,
  getUpload,
  postUpload
} from "../controller/videoController";
import { uploadVideo } from "../middleware/middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
