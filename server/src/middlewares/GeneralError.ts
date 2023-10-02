import { NextFunction, Request, Response } from "express";
import HttpStatus from "../enum/HTTPStatus";
import ErrorHandler from "../helper/ErrorHandler";

export function generalError(err: ErrorHandler, _req: Request, res: Response, _next: NextFunction) {
  res.status(HttpStatus.InternalServerError).json({ message: err.message || "Internal error. Please try again."});
}