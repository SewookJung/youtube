import routes from "../routers/routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "youtube";
  res.locals.routes = routes;
  next();
};
