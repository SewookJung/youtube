import routes from "../routers/routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "home" });
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req; //Object Destructuring
  res.render("search", { pageTitle: "search", searchingBy });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  res.redirect(routes.videoDetail(123123));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "videoDetail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
