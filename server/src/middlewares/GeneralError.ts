import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import HttpStatus from "../enum/HTTPStatus";

export function generalError(err: ErrorRequestHandler,req: Request, res: Response, next: NextFunction) {
  res.status(HttpStatus.InternalServerError).json({ message: "Internal error. Please try again."});
}