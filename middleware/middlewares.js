import routes from "../routers/routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "youtube";
  res.locals.routes = routes;
  res.locals.user = {
    identificated: true,
    id: 1
  };

  next();
};
