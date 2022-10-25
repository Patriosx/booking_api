import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

const verifyToken = (req, res, next) => {
  //si hay token es porque ha iniciado sesion correctamente
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "user not authenticated"));

  //comprueba si el token enviado lleva la firma secreta. Si se ha autenticado(login) primero
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "invalid token"));
    req.user = user;
    next();
  });
};
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    //comprueba que sea tu cuenta o que sea admin
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next(); //avanza al siguiente middleware
    } else {
      return next(createError(403, "user not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
